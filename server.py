"""
🦉 FXSense — Friendly Currency Platform REST Engine & Static Server
Implements:
  - Static Asset Delivery (index.html, style.css, app.js)
  - REST API Routes:
      GET /api/forecast?pair=USDINR
      GET /api/rates?pair=USDINR
      GET /api/signals?pair=USDINR
      GET /api/news
"""

import http.server
import socketserver
import json
import urllib.parse
import os
import sys

PORT = 8000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Plain-English Market Data Repository (Zero Jargon)
MARKET_DATABASE = {
    "USDINR": {
        "pair": "USD/INR",
        "spot": 83.4250,
        "shift_24h_pct": 0.38,
        "expected_shift_pct": 0.45,
        "market_range": [0.20, 0.70],
        "implied_target": 83.8005,
        "advisory_call": "WAIT & HOLD: Better Rate Projected in 2 Months",
        "timing_status": "wait-hold",
        "signals": {
            "gold": {"ticker": "XAU/USD", "price": 2384.40, "shift_pct": 0.42, "impact": "Direct Buffer"},
            "oil": {"ticker": "WTI", "price": 81.25, "shift_pct": -1.25, "impact": "Cost Relief"},
            "spx": {"ticker": "S&P 500", "price": 5432.10, "shift_pct": 0.31, "impact": "Confidence Lift"}
        }
    },
    "EURUSD": {
        "pair": "EUR/USD",
        "spot": 1.0864,
        "shift_24h_pct": -0.22,
        "expected_shift_pct": -0.30,
        "market_range": [-0.50, -0.10],
        "implied_target": 1.0831,
        "advisory_call": "EXCHANGE NOW: High Return Zone",
        "timing_status": "exchange-now",
        "signals": {
            "gold": {"ticker": "XAU/USD", "price": 2384.40, "shift_pct": 0.42, "impact": "Reserve Demand"},
            "oil": {"ticker": "WTI", "price": 81.25, "shift_pct": -1.25, "impact": "Energy Relief"},
            "spx": {"ticker": "S&P 500", "price": 5432.10, "shift_pct": 0.31, "impact": "Flow to US"}
        }
    },
    "GBPUSD": {
        "pair": "GBP/USD",
        "spot": 1.2715,
        "shift_24h_pct": 0.14,
        "expected_shift_pct": 0.22,
        "market_range": [0.05, 0.40],
        "implied_target": 1.2743,
        "advisory_call": "WAIT & HOLD: Better Rate Projected in 2 Months",
        "timing_status": "wait-hold",
        "signals": {
            "gold": {"ticker": "XAU/USD", "price": 2384.40, "shift_pct": 0.42, "impact": "Neutral Anchor"},
            "oil": {"ticker": "WTI", "price": 81.25, "shift_pct": -1.25, "impact": "Inflation Easing"},
            "spx": {"ticker": "S&P 500", "price": 5432.10, "shift_pct": 0.31, "impact": "Global Lift"}
        }
    },
    "AEDINR": {
        "pair": "AED/INR",
        "spot": 22.7120,
        "shift_24h_pct": 1.02,
        "expected_shift_pct": 0.55,
        "market_range": [0.30, 0.80],
        "implied_target": 22.8369,
        "advisory_call": "WAIT & HOLD: Better Rate Projected in 2 Months",
        "timing_status": "wait-hold",
        "signals": {
            "gold": {"ticker": "XAU/USD", "price": 2384.40, "shift_pct": 0.42, "impact": "Remittance Flow"},
            "oil": {"ticker": "WTI", "price": 81.25, "shift_pct": -1.25, "impact": "Fiscal Buffer"},
            "spx": {"ticker": "S&P 500", "price": 5432.10, "shift_pct": 0.31, "impact": "Inflows"}
        }
    }
}

NEWS_ITEMS = [
    {
        "id": "n1",
        "source": "Reuters",
        "headline": "Oil Prices Slide on Supply Build, Offering Fuel Relief for Asian Importers",
        "plain_impact": "Decreased fuel import expenses prevent currency outflows, supporting exchange rate stability.",
        "url": "https://www.reuters.com/markets/commodities/"
    },
    {
        "id": "n2",
        "source": "Bloomberg",
        "headline": "Sovereign Central Banks Add Record Bullion Holdings in Global Reserve Diversification",
        "plain_impact": "Higher physical gold reserves provide strong financial backing for national currencies.",
        "url": "https://www.bloomberg.com/markets"
    },
    {
        "id": "n3",
        "source": "Google News",
        "headline": "Foreign Institutional Investors Increase Emerging Market Portfolio Allocations",
        "plain_impact": "Foreign investors bringing capital into local markets helps strengthen exchange rates.",
        "url": "https://news.google.com/search?q=forex+currency+markets"
    }
]

class FXSenseServerHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path
        query_params = urllib.parse.parse_qs(parsed_url.query)

        if path.startswith("/api/"):
            self.handle_api(path, query_params)
            return

        if path == "/":
            self.path = "/index.html"

        return super().do_GET()

    def handle_api(self, path, params):
        pair = params.get("pair", ["USDINR"])[0].upper()
        if pair not in MARKET_DATABASE:
            pair = "USDINR"

        data = MARKET_DATABASE[pair]

        if path == "/api/forecast" or path == "/api/rates":
            response = {
                "status": "success",
                "pair": data["pair"],
                "spot": data["spot"],
                "shift_24h_pct": data["shift_24h_pct"],
                "expected_shift_pct": data["expected_shift_pct"],
                "market_range": data["market_range"],
                "implied_target": data["implied_target"],
                "advisory_call": data["advisory_call"],
                "timing_status": data["timing_status"]
            }
        elif path == "/api/signals":
            response = {
                "status": "success",
                "pair": data["pair"],
                "signals": data["signals"]
            }
        elif path == "/api/news":
            response = {
                "status": "success",
                "items": NEWS_ITEMS
            }
        else:
            self.send_response(404)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Endpoint not found"}).encode("utf-8"))
            return

        json_bytes = json.dumps(response, indent=2).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(json_bytes)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(json_bytes)

def run_server():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), FXSenseServerHandler) as httpd:
        print(f"🦉 FXSense server active at http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            httpd.shutdown()

if __name__ == "__main__":
    run_server()
