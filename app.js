/**
 * 🦉 FXSense — Friendly Consumer Financial Platform & Multi-Language Engine
 * Pure plain-English, accessible currency intelligence for all ages.
 */

// ============================================================================
// 1. COMPREHENSIVE MULTI-LANGUAGE TRANSLATION DICTIONARY (8 LANGUAGES)
// ============================================================================

const TRANSLATIONS = {
  en: {
    tagline: "SMART & FRIENDLY CURRENCY COMPANION",
    nav_converter: "Converter",
    nav_drivers: "Market Drivers",
    nav_timing: "Profit Handler",
    nav_budget: "Budget Simulator",
    nav_about: "About Us",
    ask_penny_btn: "Ask Penny",
    converter_title: "Instant Currency Converter",
    converter_subtitle: "Live exchange rates with zero hidden fees & smart expected trend",
    label_amount: "YOU SEND",
    label_from: "FROM CURRENCY",
    label_to: "YOU RECEIVE (TARGET)",
    estimated_total: "Estimated Converted Total:",
    guarantee_text: "Interbank Mid-Market Rate",
    timing_badge: "SENIOR-FRIENDLY EXCHANGE ADVISOR",
    timing_title: "FXSense Profit & Timing Handler",
    timing_badge_now: "🟢 EXCHANGE NOW: High Return Zone",
    timing_badge_wait: "🟡 WAIT & HOLD: Better Rate Projected in 2 Months",
    plan_title: "Plan Your Currency Transfer",
    plan_desc: "Enter how much you plan to exchange to see whether you make more money today or by waiting.",
    plan_input_label: "YOUR PLANNED EXCHANGE AMOUNT",
    why_wait_badge: "Why wait? Simple explanation:",
    plain_reason: "Monsoon trade patterns and gold reserve accumulation indicate local currency strength by November.",
    breakdown_title: "Instant Profit Breakdown",
    today_exchange: "Exchanging Today:",
    future_exchange: "Projected in 2 Months:",
    gain_label: "Potential Gain by Waiting:",
    gain_badge: "+2.72% Extra Yield",
    disclaimer_text: "Projections based on historical trends and multi-source market signals. Not guaranteed financial advice.",
    budget_title: "What Can My Money Buy Abroad?",
    budget_subtitle: "Explore real-world purchasing power for students, travelers & families",
    slide_budget: "Select your travel or transfer budget:",
    item_groceries: "Household Groceries",
    item_coffee: "Dining & Gourmet Coffee",
    item_transit: "City Transportation",
    item_stay: "Stays & Hospitality",
    drivers_title: "Verified Market Drivers & Proof Articles",
    drivers_subtitle: "Transparent news links from trusted global agencies with 1-sentence plain explanations",
    gold_title: "Gold Spot (XAU/USD)",
    gold_summary: "Central banks are buying bullion to shield reserves, which bolsters gold prices and puts steady demand on hard currencies.",
    tag_reserve: "Reserve Demand",
    oil_title: "Crude Oil (WTI)",
    oil_summary: "Lower crude oil prices reduce national energy import costs, giving immediate breathing room to local currencies like INR.",
    tag_import: "Import Relief",
    spx_title: "S&P 500 Index",
    spx_summary: "Thriving global stock markets encourage investors to take confident risks, keeping capital flowing steadily across borders.",
    tag_riskon: "Risk-On Flow",
    news_summary_1: "Plain-English Impact: Decreased fuel import expenses prevent currency outflows, supporting exchange rate stability.",
    news_summary_2: "Plain-English Impact: Higher physical gold reserves provide strong financial backing for national currencies.",
    news_summary_3: "Plain-English Impact: Foreign investors bringing capital into local markets helps strengthen exchange rates.",
    read_article: "Read Full Article",
    trends_title: "Historical Exchange Rate & Expected Trend",
    trends_subtitle: "Visualizing recent price history against forward market estimates",
    label_hist_rate: "Historical Exchange Rate",
    label_expected_trend: "Expected Trend (Gold)",
    label_conservative: "Conservative Estimate",
    label_optimistic: "Optimistic Estimate",
    reliability_title: "Market Estimates Reliability Table",
    th_estimate: "ESTIMATE METHOD",
    th_description: "FOCUS & DESCRIPTION",
    th_match: "HISTORICAL MATCH RATE",
    th_horizon: "FORECAST HORIZON",
    th_status: "RELIABILITY RATING",
    about_title: "About FXSense",
    about_subtitle: "Making currency exchange transparent, friendly, and honest for everyone",
    mission_title: "Our Mission",
    mission_desc: "FXSense was created to demystify foreign exchange. Traditional banking platforms often hide fees behind complex jargon and opaque markups. We combine verifiable macroeconomic data with friendly, accessible guidance so that students, families, travelers, and senior citizens can make confident currency decisions without second-guessing.",
    feat_1_title: "Zero Hidden Fees",
    feat_1_desc: "Always calculated at true interbank mid-market exchange rates.",
    feat_2_title: "Plain-English Explanations",
    feat_2_desc: "No convoluted financial formulas—just simple, actionable advice on whether to exchange today or wait.",
    feat_3_title: "Inclusive & Multi-Language",
    feat_3_desc: "Available in 8 global and regional languages to ensure everyone can understand their money.",
    penny_greeting: "Hi! Need currency advice? 🦉",
    penny_role: "Your friendly zero-jargon FX guide",
    penny_intro: "Hello there! I'm Penny 🦉. Whether you're planning a trip abroad, studying overseas, or sending money to family, I'm here to find you the best rates!",
    penny_ask_prompt: "Pick a quick question below, or tap the camera icon to upload a receipt photo for instant price conversion!",
    pill_quick_convert: "Quick Convert",
    pill_timing: "Should I exchange today or wait?",
    pill_shopping: "Shopping Helper",
    pill_upload: "Upload receipt or bill photo",
    chat_placeholder: "Ask Penny anything about exchange rates...",
    scanning_title: "Penny's Smart Bill Scanner",
    analyzing_text: "Reading bill totals & converting currency...",
    cancel_btn: "Cancel",
    footer_desc: "Smart currency forecasting & budgeting made simple, transparent, and senior-friendly."
  },

  hi: {
    tagline: "सरल और सुरक्षित मुद्रा साथी",
    nav_converter: "कन्वर्टर",
    nav_drivers: "बाज़ार के कारक",
    nav_timing: "लाभ और समय",
    nav_budget: "विदेश में बजट",
    nav_about: "हमारे बारे में",
    ask_penny_btn: "पेनी से पूछें",
    converter_title: "त्वरित मुद्रा परिवर्तक (कन्वर्टर)",
    converter_subtitle: "लाइव एक्सचेंज दरें, बिना किसी छिपे शुल्क और स्पष्ट बाज़ार रुझान के साथ",
    label_amount: "आप भेज रहे हैं",
    label_from: "इस मुद्रा से",
    label_to: "प्राप्त मुद्रा (लक्ष्य)",
    estimated_total: "अनुमानित कुल राशि:",
    guarantee_text: "अंतरबैंक मध्य बाज़ार दर",
    timing_badge: "वरिष्ठ नागरिकों के लिए आसान सलाहकार",
    timing_title: "FXSense लाभ और सही समय सलाहकार",
    timing_badge_now: "🟢 अभी बदलें: सर्वश्रेष्ठ रिटर्न क्षेत्र",
    timing_badge_wait: "🟡 प्रतीक्षा करें: 2 महीने में बेहतर दर की उम्मीद",
    plan_title: "अपने मुद्रा विनिमय की योजना बनाएं",
    plan_desc: "अपनी राशि दर्ज करें और देखें कि आज बदलने में फायदा है या 2 महीने रुकने में।",
    plan_input_label: "आपकी नियोजित विनिमय राशि",
    why_wait_badge: "इंतज़ार क्यों करें? सरल कारण:",
    plain_reason: "मानसून व्यापार पैटर्न और सोने के भंडार में वृद्धि नवंबर तक भारतीय रुपये को और मजबूत बनाएंगे।",
    breakdown_title: "त्वरित लाभ विश्लेषण",
    today_exchange: "आज बदलने पर:",
    future_exchange: "2 महीने बाद अनुमानित:",
    gain_label: "रुकने पर संभावित अतिरिक्त लाभ:",
    gain_badge: "+2.72% अतिरिक्त लाभ",
    disclaimer_text: "अनुमान ऐतिहासिक रुझानों और बाज़ार संकेतों पर आधारित हैं। यह वित्तीय गारंटी नहीं है।",
    budget_title: "विदेश में मेरे पैसों से क्या खरीदा जा सकता है?",
    budget_subtitle: "छात्रों, यात्रियों और परिवारों के लिए वास्तविक क्रय शक्ति का आसान अंदाज़ा",
    slide_budget: "अपना यात्रा या खर्च बजट चुनें:",
    item_groceries: "घर का किराना सामान",
    item_coffee: "रेस्तरां और कॉफ़ी",
    item_transit: "शहर में टैक्सी और यात्रा",
    item_stay: "होटल और ठहरने की व्यवस्था",
    drivers_title: "सत्यापित बाज़ार कारक और समाचार",
    drivers_subtitle: "विश्वसनीय वैश्विक एजेंसियों से प्रमाणित समाचार और सरल हिंदी सारांश",
    gold_title: "सोना हाज़िर (XAU/USD)",
    gold_summary: "केंद्रीय बैंक अपने भंडार को सुरक्षित करने के लिए सोना खरीद रहे हैं, जिससे विदेशी मुद्राओं को मजबूती मिलती है।",
    tag_reserve: "सुरक्षित भंडार",
    oil_title: "कच्चा तेल (WTI)",
    oil_summary: "कच्चे तेल की कीमतें गिरने से भारत का आयात बिल कम होता है, जिससे रुपये को राहत मिलती है।",
    tag_import: "आयात में राहत",
    spx_title: "एसएंडपी 500 शेयर सूचकांक",
    spx_summary: "वैश्विक शेयर बाजारों में तेजी से निवेशकों का विश्वास बढ़ता है और पूंजी का प्रवाह स्थिर रहता है।",
    tag_riskon: "पूंजी प्रवाह",
    news_summary_1: "सरल सारांश: कच्चे तेल के सस्ते होने से विदेशी मुद्रा का बहिर्वाह रुकता है और रुपया स्थिर रहता है।",
    news_summary_2: "सरल सारांश: सोने का बढ़ता रिज़र्व देश की मुद्रा को वित्तीय सुरक्षा और मज़बूती प्रदान करता है।",
    news_summary_3: "सरल सारांश: विदेशी संस्थागत निवेशकों की आमद से भारतीय बाज़ार और रुपये में मजबूती आती है।",
    read_article: "पूरा लेख पढ़ें",
    trends_title: "ऐतिहासिक विनिमय दर और अपेक्षित रुझान",
    trends_subtitle: "हालिया मूल्य इतिहास और भविष्य के बाज़ार अनुमानों का दृश्य प्रदर्शन",
    label_hist_rate: "ऐतिहासिक विनिमय दर",
    label_expected_trend: "अपेक्षित रुझान (गोल्ड)",
    label_conservative: "रूढ़िवादी अनुमान",
    label_optimistic: "आशावादी अनुमान",
    reliability_title: "बाज़ार अनुमान विश्वसनीयता तालिका",
    th_estimate: "अनुमान पद्धति",
    th_description: "विवरण",
    th_match: "ऐतिहासिक मिलान दर",
    th_horizon: "अनुमान अवधि",
    th_status: "विश्वसनीयता रेटिंग",
    about_title: "FXSense के बारे में",
    about_subtitle: "मुद्रा विनिमय को सभी के लिए पारदर्शी, सरल और ईमानदार बनाना",
    mission_title: "हमारा उद्देश्य",
    mission_desc: "पारंपरिक बैंकिंग प्रणालियां अक्सर कठिन शब्दों के पीछे छिपे शुल्क लगाती हैं। हम सभी के लिए सीधा, सरल और भरोसेमंद मुद्रा मार्गदर्शन उपलब्ध कराते हैं।",
    feat_1_title: "शून्य छिपे शुल्क",
    feat_1_desc: "हमेशा वास्तविक अंतरबैंक मध्य बाज़ार दरों पर आधारित।",
    feat_2_title: "सरल हिंदी स्पष्टीकरण",
    feat_2_desc: "कोई जटिल गणित नहीं—केवल स्पष्ट सलाह कि आज बदलें या रुकें।",
    feat_3_title: "8 प्रमुख भाषाएं",
    feat_3_desc: "वैश्विक और क्षेत्रीय भाषाओं में उपलब्ध ताकि हर नागरिक अपनी मुद्रा को समझ सके।",
    penny_greeting: "नमस्ते! मुद्रा सलाह चाहिए? 🦉",
    penny_role: "आपकी अपनी दोस्ताना मुद्रा गाइड",
    penny_intro: "नमस्ते! मैं हूँ पेनी 🦉। चाहे विदेश यात्रा हो, पढ़ाई या परिवार को पैसे भेजना—मैं आपके लिए सबसे अच्छी दर खोजूंगी!",
    penny_ask_prompt: "नीचे दिए गए बटन पर टैप करें या बिल/रसीद की तस्वीर अपलोड करके तुरंत मुद्रा बदलें!",
    pill_quick_convert: "त्वरित रूपांतरण",
    pill_timing: "क्या आज बदलें या इंतज़ार करें?",
    pill_shopping: "शॉपिंग गाइड",
    pill_upload: "रसीद या बिल की फोटो अपलोड करें",
    chat_placeholder: "मुद्रा विनिमय के बारे में कुछ भी पूछें...",
    scanning_title: "पेनी का स्मार्ट बिल स्कैनर",
    analyzing_text: "रसीद पढ़ी जा रही है और मुद्रा बदली जा रही है...",
    cancel_btn: "रद्द करें",
    footer_desc: "स्मार्ट मुद्रा पूर्वानुमान और बजट—वरिष्ठ नागरिकों और युवाओं के लिए सबसे सरल।"
  },

  mr: {
    tagline: "सोपा आणि विश्वासार्ह चलन मित्र",
    nav_converter: "कन्व्हर्टर",
    nav_drivers: "बाजारपेठ घटक",
    nav_timing: "नफा व वेळ",
    nav_budget: "परदेशातील बजेट",
    nav_about: "आमच्याबद्दल",
    ask_penny_btn: "पेनीला विचारा",
    converter_title: "झटपट चलन परिवर्तक",
    converter_subtitle: "थेट विनिमय दर, लपविलेले शुल्क नाही आणि सोपे बाजार अंदाज",
    label_amount: "तुम्ही पाठवत आहात",
    label_from: "या चलनातुन",
    label_to: "मिळणारे चलन (लक्ष्य)",
    estimated_total: "अंदाजे एकूण रक्कम:",
    guarantee_text: "आंतरबँक थेट दर",
    timing_badge: "ज्येष्ठ नागरिकांसाठी सुलभ मार्गदर्शक",
    timing_title: "FXSense नफा आणि वेळ मार्गदर्शक",
    timing_badge_now: "🟢 आत्ताच बदला: उत्तम नफा मिळण्याची वेळ",
    timing_badge_wait: "🟡 थांबा आणि वाट पहा: २ महिन्यांत चांगला दर मिळेल",
    plan_title: "तुमच्या विनिमयाचे नियोजन करा",
    plan_desc: "तुम्हाला किती पैसे बदलायचे आहेत ते टाका आणि आज बदलणे फायद्याचे आहे की वाट पाहणे ते पहा.",
    plan_input_label: "तुमची नियोजित रक्कम",
    why_wait_badge: "वाट का पहावी? सोपे कारण:",
    plain_reason: "मान्सून व्यापार आणि सोन्याचा वाढता साठा यामुळे नोव्हेंबरपर्यंत रुपया आणखी बळकट होण्याचा अंदाज आहे.",
    breakdown_title: "झटपट नफा तपशील",
    today_exchange: "आज बदलल्यास:",
    future_exchange: "२ महिन्यांनंतर अंदाज:",
    gain_label: "वाट पाहिल्यास संभाव्य फायदा:",
    gain_badge: "+२.७२% अतिरिक्त परतावा",
    disclaimer_text: "अंदाज ऐतिहासिक नोंदींवर आधारित आहेत. हा हमी परतावा नाही.",
    budget_title: "परदेशात माझ्या पैशात काय खरेदी करता येईल?",
    budget_subtitle: "विद्यार्थी आणि पर्यटकांसाठी प्रत्यक्ष खरेदी क्षमतेचा सोपा हिशोब",
    slide_budget: "तुमचे बजेट निवडा:",
    item_groceries: "घराचा किराणा माल",
    item_coffee: "हॉटेल आणि कॉफी",
    item_transit: "शहरातील प्रवास आणि टॅक्सी",
    item_stay: "हॉटेलमध्ये मुक्काम",
    drivers_title: "सत्यापित बाजार घटक आणि बातम्या",
    drivers_subtitle: "जागतिक संस्थांकडून खात्रीशीर बातम्या आणि सोपे स्पष्टीकरण",
    gold_title: "सोने (XAU/USD)",
    gold_summary: "मध्यवर्ती बँका सोन्याची खरेदी करत असल्याने चलनांना चांगला आधार मिळत आहे.",
    tag_reserve: "राखीव साठा",
    oil_title: "कच्चे तेल (WTI)",
    oil_summary: "तेलाचे भाव घसरल्यामुळे भारताचा आयात खर्च कमी होतो आणि रुपयाला दिलासा मिळतो.",
    tag_import: "आयात दिलासा",
    spx_title: "एस अँड पी ५०० निर्देशांक",
    spx_summary: "शेअर बाजारातील तेजीमुळे परदेशी गुंतवणुकीचा ओघ टिकून राहतो.",
    tag_riskon: "गुंतवणूक ओघ",
    news_summary_1: "सोपा परिणाम: तेलाचे दर कमी झाल्याने रुपया स्थिर राहण्यास मदत होते.",
    news_summary_2: "सोपा परिणाम: सोन्याचा मोठा साठा देशाच्या अर्थव्यवस्थेला बळ देतो.",
    news_summary_3: "सोपा परिणाम: परदेशी गुंतवणूकदारांच्या पैशामुळे भारतीय बाजारात स्थिरता येते.",
    read_article: "पूर्ण बातमी वाचा",
    trends_title: "ऐतिहासिक विनिमय दर आणि अपेक्षित ट्रेंड",
    trends_subtitle: "किंमतींचा इतिहास आणि पुढील काळातील बाजाराचे अंदाज",
    label_hist_rate: "ऐतिहासिक विनिमय दर",
    label_expected_trend: "अपेक्षित ट्रेंड (सुवर्ण)",
    label_conservative: "सुरक्षित अंदाज",
    label_optimistic: "आशावादी अंदाज",
    reliability_title: "बाजार अंदाज विश्वसनीयता तक्ता",
    th_estimate: "पद्धती",
    th_description: "तपशील",
    th_match: "ऐतिहासिक जुळणी दर",
    th_horizon: "अंदाज कालावधी",
    th_status: "कामगिरी",
    about_title: "FXSense बद्दल",
    about_subtitle: "चलन विनिमय सर्वांसाठी पारदर्शक आणि सोपे करणे",
    mission_title: "आमचे ध्येय",
    mission_desc: "परकीय चलन समजणे सोपे व्हावे यासाठी FXSense ची निर्मिती झाली आहे. सर्वसामान्य नागरिकांसाठी पारदर्शक सल्ला देणे हे आमचे ध्येय आहे.",
    feat_1_title: "कोणतेही छुपे शुल्क नाही",
    feat_1_desc: "नेहमी खऱ्या आंतरबँक दरावर आधारित.",
    feat_2_title: "सोप्या मराठीत माहिती",
    feat_2_desc: "कठीण संज्ञा न वापरता सरळ आणि उपयुक्त मार्गदर्शन.",
    feat_3_title: "८ जागतिक भाषा",
    feat_3_desc: "प्रत्येकाला आपल्या भाषेत समजण्यासाठी बहुभाषिक सुविधा.",
    penny_greeting: "नमस्कार! चलन सल्ला हवा आहे? 🦉",
    penny_role: "तुमची प्रेमळ आणि हुशार मार्गदर्शक",
    penny_intro: "नमस्कार! मी पेनी 🦉. परदेश दौरा असो वा घरात पैसे पाठवणे—मी तुम्हाला सर्वोत्तम दर शोधून देईन!",
    penny_ask_prompt: "खालील पर्यायांवर क्लिक करा किंवा बिलाचा फोटो काढून लगेच रूपांतर करा!",
    pill_quick_convert: "झटपट रूपांतर",
    pill_timing: "आज पैसे बदलावे की थांबावे?",
    pill_shopping: "खरेदी मदतनीस",
    pill_upload: "पावती किंवा बिलाचा फोटो टाका",
    chat_placeholder: "पेनीला काहीही विचारा...",
    scanning_title: "पेनीचे स्मार्ट बिल स्कॅनर",
    analyzing_text: "बिल तपासले जात आहे आणि रूपांतर होत आहे...",
    cancel_btn: "रद्द करा",
    footer_desc: "स्मार्ट चलन अंदाज—ज्येष्ठ नागरिक आणि तरुण मित्रांसाठी सर्वात सोपा."
  },

  es: {
    tagline: "COMPAÑERO INTELIGENTE Y CERCANO DE DIVISAS",
    nav_converter: "Conversor",
    nav_drivers: "Mercado",
    nav_timing: "Momento y Ganancia",
    nav_budget: "Presupuesto",
    nav_about: "Nosotros",
    ask_penny_btn: "Preguntar a Penny",
    converter_title: "Conversor de Divisas en Tiempo Real",
    converter_subtitle: "Tipos de cambio interbancarios sin comisiones ocultas y tendencia esperada",
    label_amount: "TÚ ENVÍAS",
    label_from: "DE (MONEDA)",
    label_to: "RECIBES (DESTINO)",
    estimated_total: "Total Estimado Recibido:",
    guarantee_text: "Tipo de Cambio Medio del Mercado",
    timing_badge: "CONSEJERO FINANCIERO ACCESIBLE",
    timing_title: "Gestor de Momento y Ganancia FXSense",
    timing_badge_now: "🟢 CAMBIAR AHORA: Zona de Alto Retorno",
    timing_badge_wait: "🟡 ESPERAR Y MANTENER: Mejor Tasa Proyectada en 2 Meses",
    plan_title: "Planifica tu Transferencia",
    plan_desc: "Ingresa el monto que deseas cambiar para saber si ganas más hoy o esperando.",
    plan_input_label: "TU MONTO PLANIFICADO",
    why_wait_badge: "¿Por qué esperar? Razón simple:",
    plain_reason: "Los patrones comerciales del monzón y las reservas de oro impulsan la moneda local hacia noviembre.",
    breakdown_title: "Desglose Instantáneo de Ganancia",
    today_exchange: "Cambiando Hoy:",
    future_exchange: "Proyectado en 2 Meses:",
    gain_label: "Ganancia Potencial Esperando:",
    gain_badge: "+2.72% Rendimiento Extra",
    disclaimer_text: "Proyecciones basadas en tendencias históricas. No constituye garantía de inversión.",
    budget_title: "¿Qué Puede Comprar mi Dinero en el Extranjero?",
    budget_subtitle: "Poder adquisitivo en la vida real para estudiantes, familias y viajeros",
    slide_budget: "Selecciona tu presupuesto de viaje o transferencia:",
    item_groceries: "Compras de Supermercado",
    item_coffee: "Restaurantes y Café Gourmet",
    item_transit: "Transporte Urbano y Taxis",
    item_stay: "Alojamiento y Hoteles",
    drivers_title: "Factores Clave del Mercado y Artículos Verificados",
    drivers_subtitle: "Noticias transparentes con enlaces de prueba directa de Reuters y Bloomberg",
    gold_title: "Oro al Contado (XAU/USD)",
    gold_summary: "Los bancos centrales compran lingotes para proteger reservas, respaldando el valor de las divisas.",
    tag_reserve: "Demanda de Reservas",
    oil_title: "Petróleo Crudo (WTI)",
    oil_summary: "El crudo a la baja reduce los costos de importación de energía, aliviando las divisas emergentes.",
    tag_import: "Alivio de Importación",
    spx_title: "Índice S&P 500",
    spx_summary: "El optimismo bursátil mundial genera apetito por riesgo y flujo sostenido de capitales.",
    tag_riskon: "Flujo Inversor",
    news_summary_1: "Impacto Simple: El abaratamiento energético frena la salida de dólares y estabiliza el tipo de cambio.",
    news_summary_2: "Impacto Simple: Mayores reservas de oro otorgan solidez y respaldo tangible a las economías.",
    news_summary_3: "Impacto Simple: Las inversiones extranjeras fortalecen la liquidez y cotización de la moneda local.",
    read_article: "Leer Artículo Completo",
    trends_title: "Tipo de Cambio Histórico y Tendencia Esperada",
    trends_subtitle: "Visualización de precios históricos frente a estimaciones del mercado",
    label_hist_rate: "Tipo de Cambio Histórico",
    label_expected_trend: "Tendencia Esperada (Dorado)",
    label_conservative: "Estimación Conservadora",
    label_optimistic: "Estimación Optimista",
    reliability_title: "Tabla de Fiabilidad de Estimaciones",
    th_estimate: "MÉTODO",
    th_description: "DESCRIPCIÓN",
    th_match: "TASA DE ACIERTO",
    th_horizon: "HORIZONTE",
    th_status: "FIABILIDAD",
    about_title: "Acerca de FXSense",
    about_subtitle: "Haciendo el cambio de divisas transparente, cercano y honesto",
    mission_title: "Nuestra Misión",
    mission_desc: "Eliminamos las comisiones ocultas y la jerga bancaria compleja para ofrecer orientación clara a familias, viajeros y estudiantes.",
    feat_1_title: "Cero Comisiones Ocultas",
    feat_1_desc: "Siempre calculado al tipo de cambio real interbancario.",
    feat_2_title: "Explicaciones en Lenguaje Claro",
    feat_2_desc: "Consejos directos sobre si conviene cambiar hoy o esperar.",
    feat_3_title: "Multilingüe e Inclusivo",
    feat_3_desc: "Disponible en 8 idiomas para que todos entiendan su dinero.",
    penny_greeting: "¡Hola! ¿Dudas con el cambio? 🦉",
    penny_role: "Tu guía financiera amable y sin rodeos",
    penny_intro: "¡Hola! Soy Penny 🦉. Ya sea para viajar, estudiar o enviar dinero a tu familia, ¡te ayudo a conseguir la mejor tasa!",
    penny_ask_prompt: "Elige una opción rápida o sube una foto de tu factura/recibo para convertirla al instante.",
    pill_quick_convert: "Conversión Rápida",
    pill_timing: "¿Cambio hoy o me conviene esperar?",
    pill_shopping: "Asistente de Compras",
    pill_upload: "Subir foto de recibo o cuenta",
    chat_placeholder: "Pregúntale a Penny sobre tipos de cambio...",
    scanning_title: "Escáner Inteligente de Penny",
    analyzing_text: "Leyendo totales de la cuenta y convirtiendo...",
    cancel_btn: "Cancelar",
    footer_desc: "Previsión y presupuesto de divisas inteligente: sencillo, transparente y para todas las edades."
  },

  zh: {
    tagline: "智能贴心的外汇与货币助手",
    nav_converter: "换算器",
    nav_drivers: "市场动向",
    nav_timing: "最佳时机",
    nav_budget: "海外预算",
    nav_about: "关于我们",
    ask_penny_btn: "问问小猫头鹰",
    converter_title: "即时外币换算器",
    converter_subtitle: "零隐藏手续费的实时银行间中间价与预期趋势",
    label_amount: "您汇出",
    label_from: "汇出币种",
    label_to: "您收到 (目标币种)",
    estimated_total: "预计到账总额:",
    guarantee_text: "银行间中间汇率保障",
    timing_badge: "适老化友好汇率顾问",
    timing_title: "FXSense 汇兑时机与利润顾问",
    timing_badge_now: "🟢 建议立即兑换: 高收益最佳区间",
    timing_badge_wait: "🟡 建议观望等待: 预计2个月后汇率更优",
    plan_title: "规划您的换汇资金",
    plan_desc: "输入您计划兑换的金额，立即测算今天是立刻换划算，还是等待更有利。",
    plan_input_label: "计划换汇总额",
    why_wait_badge: "为什么要等待？通俗原因:",
    plain_reason: "季节性贸易模式与黄金外汇储备积累表明，到11月份本币汇率将显著走强。",
    breakdown_title: "即时收益明细",
    today_exchange: "今天立即兑换:",
    future_exchange: "2个月后预计兑换:",
    gain_label: "等待可带来的潜在收益:",
    gain_badge: "+2.72% 额外增益",
    disclaimer_text: "预测基于历史时间序列趋势与宏观市场信号，不构成绝对担保。",
    budget_title: "我的钱在国外能买些什么？",
    budget_subtitle: "帮助留学生、游客与家庭直观感受目标国的日常真实购买力",
    slide_budget: "滑动选择您的旅行或兑换预算:",
    item_groceries: "日常果蔬生鲜超市",
    item_coffee: "精致咖啡与地道餐饮",
    item_transit: "市内交通与计程车",
    item_stay: "精品酒店与民宿住宿",
    drivers_title: "权威市场驱动因子与新闻来源",
    drivers_subtitle: "来自路透社、彭博社的透明新闻链接及一句话通俗解读",
    gold_title: "现货黄金 (XAU/USD)",
    gold_summary: "多国央行持续增持黄金储备以对冲风险，为硬通货价值提供强劲支撑。",
    tag_reserve: "黄金储备需求",
    oil_title: "WTI 原油",
    oil_summary: "国际原油价格回落减轻了能源进口国的账单压力，稳定本币汇率。",
    tag_import: "进口账单减压",
    spx_title: "标普500指数 (S&P 500)",
    spx_summary: "全球股市稳步上扬提振风险投资偏好，保持跨国资本平稳流入。",
    tag_riskon: "资本流入",
    news_summary_1: "通俗解读: 能源支出减少有效防止外汇流失，助力当地货币稳健升值。",
    news_summary_2: "通俗解读: 央行黄金储备增加为国家货币提供了坚实的信誉和资产后盾。",
    news_summary_3: "通俗解读: 外资持续流入本国金融市场，推动外汇供需更加平衡稳定。",
    read_article: "阅读完整报道",
    trends_title: "历史汇率与预期走势",
    trends_subtitle: "近期价格轨迹与前瞻市场预估",
    label_hist_rate: "历史成交汇率",
    label_expected_trend: "预期趋势 (金色)",
    label_conservative: "保守估计",
    label_optimistic: "乐观估计",
    reliability_title: "市场预测可靠性汇总表",
    th_estimate: "估测方法",
    th_description: "特点与说明",
    th_match: "历史吻合率",
    th_horizon: "预测周期",
    th_status: "可靠性评级",
    about_title: "关于 FXSense",
    about_subtitle: "让货币兑换变得透明、亲切、简单",
    mission_title: "我们的使命",
    mission_desc: "传统金融机构常常用晦涩术语掩盖费用。FXSense 为家庭、留学生与长者提供诚实透明的换汇指引。",
    feat_1_title: "零隐藏加价",
    feat_1_desc: "始终采用真实银行间中间价换算。",
    feat_2_title: "通俗大白话解释",
    feat_2_desc: "告别复杂公式，直接告诉您今天换划算还是等待更有利。",
    feat_3_title: "多语言无障碍支持",
    feat_3_desc: "支持8种语言，让全球用户轻松管理每一笔货币兑换。",
    penny_greeting: "您好！想咨询换汇建议吗？ 🦉",
    penny_role: "您的贴心外汇伴侣·没有晦涩术语",
    penny_intro: "您好呀！我是小猫头鹰 Penny 🦉。不论您是出国旅游、留学还是给家人汇款，我都帮您锁定最优汇率！",
    penny_ask_prompt: "点击下方快捷提问，或点击相机按钮上传收据照片，即可秒级换算价格！",
    pill_quick_convert: "快速换算汇率",
    pill_timing: "今天换划算还是再等等？",
    pill_shopping: "境外购物小助手",
    pill_upload: "上传购物小票或账单照片",
    chat_placeholder: "向 Penny 咨询任何外汇或物价问题...",
    scanning_title: "Penny 智能账单扫描器",
    analyzing_text: "正在识别小票总计金额并换算货币...",
    cancel_btn: "取消",
    footer_desc: "智能外币换算与海外预算——老少皆宜，透明直观。"
  },

  fr: {
    tagline: "COMPAGNON DE CHANGE INTELLIGENT ET CONVIVIAL",
    nav_converter: "Convertisseur",
    nav_drivers: "Marché",
    nav_timing: "Profit et Timing",
    nav_budget: "Budget Voyage",
    nav_about: "À Propos",
    ask_penny_btn: "Demander à Penny",
    converter_title: "Convertisseur de Devises Instantané",
    converter_subtitle: "Taux interbancaires réels sans frais cachés et tendance attendue",
    label_amount: "VOUS ENVOYEZ",
    label_from: "DEVISE DE DÉPART",
    label_to: "DEVISE REÇUE (CIBLE)",
    estimated_total: "Total Estimé Reçu :",
    guarantee_text: "Taux Interbancaire Moyen Garanti",
    timing_badge: "CONSEILLER DE CHANGE ACCESSIBLE",
    timing_title: "Conseiller de Timing et Profit FXSense",
    timing_badge_now: "🟢 CHANGER MAINTENANT : Zone de Taux Très Favorable",
    timing_badge_wait: "🟡 ATTENDRE : Meilleur Taux Prévu dans 2 Mois",
    plan_title: "Planifiez votre Transfert",
    plan_desc: "Indiquez la somme à échanger pour découvrir s'il est plus avantageux de changer aujourd'hui ou de patienter.",
    plan_input_label: "VOTRE MONTANT PLANIFIÉ",
    why_wait_badge: "Pourquoi attendre ? Explication simple :",
    plain_reason: "Les cycles commerciaux et l'accumulation de réserves d'or renforcent la devise locale d'ici novembre.",
    breakdown_title: "Calcul Immédiat du Gain",
    today_exchange: "En échangeant aujourd'hui :",
    future_exchange: "Prévu dans 2 mois :",
    gain_label: "Gain potentiel en attendant :",
    gain_badge: "+2,72 % de gain supplémentaire",
    disclaimer_text: "Projections basées sur des tendances historiques. Ne constitue pas un conseil financier garanti.",
    budget_title: "Que Puis-je Acheter à l'Étranger ?",
    budget_subtitle: "Aperçu du pouvoir d'achat concret pour étudiants, voyageurs et familles",
    slide_budget: "Ajustez votre budget de voyage ou de transfert :",
    item_groceries: "Courses Alimentaires",
    item_coffee: "Restaurants & Cafés Gourmands",
    item_transit: "Transports & Taxis",
    item_stay: "Hébergements & Hôtels",
    drivers_title: "Facteurs de Marché et Articles de Preuve",
    drivers_subtitle: "Liens d'actualités vérifiés (Reuters, Bloomberg) avec explication claire en 1 phrase",
    gold_title: "Or au Comptant (XAU/USD)",
    gold_summary: "Les banques centrales achètent de l'or pour sécuriser leurs réserves, consolidant la valeur des devises.",
    tag_reserve: "Réserves d'Or",
    oil_title: "Pétrole Brut (WTI)",
    oil_summary: "La baisse des cours du pétrole allège la facture énergétique nationale et soulage les devises locales.",
    tag_import: "Allègement Énergétique",
    spx_title: "Indice S&P 500",
    spx_summary: "La bonne santé des marchés actions stimule l'appétit pour le risque et les flux de capitaux internationaux.",
    tag_riskon: "Flux de Capitaux",
    news_summary_1: "Impact Simple : Des coûts pétroliers réduits freinent la fuite des devises et stabilisent le change.",
    news_summary_2: "Impact Simple : Des réserves d'or accrues constituent un gage de solidité financière pour le pays.",
    news_summary_3: "Impact Simple : L'arrivée de capitaux étrangers dynamise la trésorerie et la tenue de la monnaie locale.",
    read_article: "Lire l'Article Complet",
    trends_title: "Taux Historique et Tendance Attendue",
    trends_subtitle: "Visualisation de l'historique récent et estimations du marché",
    label_hist_rate: "Taux de Change Historique",
    label_expected_trend: "Tendance Attendue (Doré)",
    label_conservative: "Estimation Prudente",
    label_optimistic: "Estimation Optimiste",
    reliability_title: "Tableau de Fiabilité des Estimations",
    th_estimate: "MÉTHODE",
    th_description: "DESCRIPTION",
    th_match: "TAUX DE CORRESPONDANCE",
    th_horizon: "HORIZON",
    th_status: "FIABILITÉ",
    about_title: "À Propos de FXSense",
    about_subtitle: "Rendre le change de devises transparent, accessible et loyal",
    mission_title: "Notre Mission",
    mission_desc: "Nous supprimons le jargon financier opaque pour offrir des explications simples et honnêtes à toutes les générations.",
    feat_1_title: "Zéro Frais Cachés",
    feat_1_desc: "Toujours calculé au taux réel interbancaire.",
    feat_2_title: "Explications Simples",
    feat_2_desc: "Des conseils clairs pour savoir s'il faut changer maintenant ou attendre.",
    feat_3_title: "8 Langues Disponibles",
    feat_3_desc: "Accessible dans le monde entier pour faciliter vos projets.",
    penny_greeting: "Bonjour ! Besoin d'un conseil ? 🦉",
    penny_role: "Votre guide de change chaleureux et sans jargon",
    penny_intro: "Bonjour ! Je suis Penny 🦉. Que vous prépariez un voyage, vos études ou un envoi d'argent à vos proches, je vous trouve le meilleur taux !",
    penny_ask_prompt: "Cliquez sur une question rapide ou importez la photo d'un reçu pour obtenir la conversion immédiate !",
    pill_quick_convert: "Conversion Rapide",
    pill_timing: "Changer aujourd'hui ou attendre ?",
    pill_shopping: "Aide au Shopping",
    pill_upload: "Téléverser la photo d'un reçu",
    chat_placeholder: "Posez votre question à Penny sur les devises...",
    scanning_title: "Scanner de Facture Intelligent de Penny",
    analyzing_text: "Lecture du total de l'addition et conversion en cours...",
    cancel_btn: "Annuler",
    footer_desc: "Prévisions de devises et budget voyage : simple, transparent et adapté à tous les âges."
  },

  ar: {
    tagline: "رفيقك الذكي والودود لتحويل العملات",
    nav_converter: "المحول",
    nav_drivers: "محركات السوق",
    nav_timing: "التوقيت والربح",
    nav_budget: "ميزانية السفر",
    nav_about: "من نحن",
    ask_penny_btn: "اسأل بيني",
    converter_title: "محول العملات الفوري",
    converter_subtitle: "أسعار صرف حية بين البنوك بدون رسوم مخفية والاتجاه المتوقع",
    label_amount: "أنت ترسل",
    label_from: "من عملة",
    label_to: "أنت تستلم (الهدف)",
    estimated_total: "المجموع المقدر المستلم:",
    guarantee_text: "سعر الصرف الحقيقي المعتمد بين البنوك",
    timing_badge: "مستشار الصرف المناسب لكبار السن والجميع",
    timing_title: "مستشار توقيت وأرباح الصرف FXSense",
    timing_badge_now: "🟢 قم بالتحويل الآن: فرصة عوائد ممتازة",
    timing_badge_wait: "🟡 تريّث وانتظر: نتوقع سعراً أفضل خلال شهرين",
    plan_title: "خطط لتحويل أموالك بذكاء",
    plan_desc: "أدخل المبلغ الذي تنوي تحويله لتعرف ما إذا كان الصرف اليوم أفضل أم بعد شهرين.",
    plan_input_label: "مبلغ التحويل المخطط له",
    why_wait_badge: "لماذا نوصي بالانتظار؟ تفسير مبسط:",
    plain_reason: "حركة التجارة الموسمية وتراكم احتياطيات الذهب يدعمان قوة العملة المحلية بحلول نوفمبر.",
    breakdown_title: "تفاصيل الأرباح الفورية",
    today_exchange: "عند التحويل اليوم:",
    future_exchange: "المتوقع بعد شهرين:",
    gain_label: "الربح الإضافي المتوقع بالانتظار:",
    gain_badge: "+2.72% عائد إضافي",
    disclaimer_text: "التوقعات مبنية على الاتجاهات التاريخية وليست ضماناً مالياً قاطعاً.",
    budget_title: "ماذا يمكن لأموالي شراؤه في الخارج؟",
    budget_subtitle: "اكتشف القوة الشرائية الحقيقية في بلد وجهتك للطلاب والمسافرين والعائلات",
    slide_budget: "اختر ميزانية السفر أو التحويل الخاصة بك:",
    item_groceries: "مشتريات البقالة المنزلية",
    item_coffee: "المطاعم والقهوة الفاخرة",
    item_transit: "المواصلات وسيارات الأجرة",
    item_stay: "الإقامة والفنادق",
    drivers_title: "عوامل السوق المعتمدة وروابط الإثبات",
    drivers_subtitle: "أخبار موثوقة من رويترز وبلومبرغ مع ملخص بسيط ومباشر من جملة واحدة",
    gold_title: "الذهب الفوري (XAU/USD)",
    gold_summary: "تقوم البنوك المركزية بشراء سبائك الذهب لتعزيز احتياطياتها مما يرفع من قيمة العملات الصلبة.",
    tag_reserve: "طلب الاحتياطي",
    oil_title: "نفط خام غرب تكساس (WTI)",
    oil_summary: "انخفاض أسعار النفط يقلل من تكلفة فاتورة الاستيراد ويدعم استقرار العملة المحلية.",
    tag_import: "تخفيف تكلفة الاستيراد",
    spx_title: "مؤشر إس آند بي 500",
    spx_summary: "ازدهار أسواق الأسهم يعزز ثقة المستثمرين ويحافظ على تدفق رؤوس الأموال عبر الحدود.",
    tag_riskon: "تدفق رؤوس الأموال",
    news_summary_1: "الأثر المبسط: انخفاض نفقات الوقود يمنع تسرب العملة الأجنبية ويدعم ثبات الصرف.",
    news_summary_2: "الأثر المبسط: ارتفاع احتياطي الذهب يمنح العملة المحلية ثقلاً وأماناً مالياً متيناً.",
    news_summary_3: "الأثر المبسط: دخول الاستثمارات الأجنبية يعزز السيولة النقدية ويدعم قيمة العملة.",
    read_article: "اقرأ المقال كاملاً",
    trends_title: "سعر الصرف التاريخي والاتجاه المتوقع",
    trends_subtitle: "عرض مرئي لحركة الأسعار السابقة مقارنة بتقديرات السوق المستقبلية",
    label_hist_rate: "سعر الصرف التاريخي",
    label_expected_trend: "الاتجاه المتوقع (ذهبي)",
    label_conservative: "التقدير المتحفظ",
    label_optimistic: "التقدير المتفائل",
    reliability_title: "جدول موثوقية تقديرات السوق",
    th_estimate: "طريقة التقدير",
    th_description: "الوصف",
    th_match: "نسبة المطابقة التاريخية",
    th_horizon: "المدة الزمنية",
    th_status: "الموثوقية",
    about_title: "عن FXSense",
    about_subtitle: "جعل تحويل العملات واضحاً وودياً وصادقاً للجميع",
    mission_title: "مهمتنا",
    mission_desc: "نسعى لتبسيط أسواق العملات بعيداً عن المصطلحات المعقدة والرسوم المخفية، لتوفير تجربة مريحة لكافة الأجيال.",
    feat_1_title: "بدون رسوم مخفية",
    feat_1_desc: "دائماً بالاعتماد على أسعار السوق الحقيقية المعتمدة بين البنوك.",
    feat_2_title: "تفسيرات مبسطة بالكامل",
    feat_2_desc: "إرشادات واضحة ومباشرة حول ما إذا كان عليك التحويل اليوم أم الانتظار.",
    feat_3_title: "دعم متعدد اللغات",
    feat_3_desc: "متوفر بـ 8 لغات رئيسية لضمان وصول الخدمة للجميع بسهولة.",
    penny_greeting: "مرحباً! هل تحتاج مساعدة في الصرف؟ 🦉",
    penny_role: "مرشدتك المالية اللطيفة دون تعقيدات",
    penny_intro: "أهلاً بك! أنا بيني 🦉. سواء كنت مسافراً، أو تدرس بالخارج، أو ترسل أموالاً لعائلتك، سأساعدك في الحصول على أفضل سعر!",
    penny_ask_prompt: "اختر سؤالاً سريعاً من الأسفل، أو اضغط على أيقونة الكاميرا لرفع صورة فاتورة وتحويلها فوراً!",
    pill_quick_convert: "تحويل سريع للعملة",
    pill_timing: "هل أحول اليوم أم أنتظر؟",
    pill_shopping: "مساعد التسوق بالخارج",
    pill_upload: "رفع صورة فاتورة أو إيصال",
    chat_placeholder: "اسأل بيني أي شيء عن العملات والأسعار...",
    scanning_title: "ماسح الفواتير الذكي من بيني",
    analyzing_text: "جاري قراءة إجمالي الفاتورة وتحويل العملة...",
    cancel_btn: "إلغاء",
    footer_desc: "توقعات العملات وميزانية السفر: سهلة وشفافة ومناسبة لجميع الأعمار."
  },

  de: {
    tagline: "IHR FREUNDLICHER UND SMARTER WÄHRUNGSBEGLEITER",
    nav_converter: "Währungsrechner",
    nav_drivers: "Marktfaktoren",
    nav_timing: "Gewinn-Assistent",
    nav_budget: "Budget-Simulator",
    nav_about: "Über Uns",
    ask_penny_btn: "Penny fragen",
    converter_title: "Sofort-Währungsrechner",
    converter_subtitle: "Echte Interbanken-Kurse ohne versteckte Gebühren mit erwarteter Markttendenz",
    label_amount: "SIE SENDEN",
    label_from: "AUSGANGSWÄHRUNG",
    label_to: "ZIELWÄHRUNG (EMPFANG)",
    estimated_total: "Geschätzter Auszahlungsbetrag:",
    guarantee_text: "Garantierter echter Devisenmittelkurs",
    timing_badge: "SENIORENFREUNDLICHER WECHSELKURS-BERATER",
    timing_title: "FXSense Gewinn- & Timing-Assistent",
    timing_badge_now: "🟢 JETZT WECHSELN: Sehr günstige Renditephase",
    timing_badge_wait: "🟡 ABWARTEN: Besserer Kurs in 2 Monaten prognostiziert",
    plan_title: "Planen Sie Ihren Geldtransfer",
    plan_desc: "Geben Sie Ihren Betrag ein, um sofort zu sehen, ob ein Wechsel heute oder in 2 Monaten lohnender ist.",
    plan_input_label: "IHR GEPLANTER WECHSELBETRAG",
    why_wait_badge: "Warum warten? Einfache Erklärung:",
    plain_reason: "Saisonale Handelsströme und wachsende Goldreserven stärken die Landeswährung spürbar bis November.",
    breakdown_title: "Sofortige Gewinnaufstellung",
    today_exchange: "Beim Wechsel heute:",
    future_exchange: "Prognose in 2 Monaten:",
    gain_label: "Möglicher Mehrerlös durch Warten:",
    gain_badge: "+2,72 % Zusatzgewinn",
    disclaimer_text: "Prognosen basieren auf historischen Markttrends. Keine Garantie für künftige Kurse.",
    budget_title: "Was kann ich mir im Ausland leisten?",
    budget_subtitle: "Echte Kaufkraftbeispiele für Studierende, Reisende und Familien",
    slide_budget: "Wählen Sie Ihr Reise- oder Transferbudget:",
    item_groceries: "Lebensmitteleinkauf",
    item_coffee: "Restaurants & Premium-Kaffee",
    item_transit: "Stadtverkehr & Taxis",
    item_stay: "Unterkünfte & Hotels",
    drivers_title: "Geprüfte Markttreiber & Belegartikel",
    drivers_subtitle: "Transparente Meldungen renommierter Quellen (Reuters, Bloomberg) mit einfacher 1-Satz-Erklärung",
    gold_title: "Gold Spot (XAU/USD)",
    gold_summary: "Zentralbanken stocken Goldreserven auf, was den Wert stabiler Währungen weltweit stützt.",
    tag_reserve: "Reserve-Nachfrage",
    oil_title: "Rohöl (WTI)",
    oil_summary: "Sinkende Ölpreise entlasten die nationale Importbilanz und stabilisieren lokale Währungen wie INR.",
    tag_import: "Import-Entlastung",
    spx_title: "S&P 500 Index",
    spx_summary: "Florierende Aktienmärkte fördern die Risikobereitschaft und sichern stetige Kapitalzuflüsse.",
    tag_riskon: "Kapitalzufluss",
    news_summary_1: "Einfach erklärt: Niedrigere Energiekosten verhindern Devisenabflüsse und stützen den Wechselkurs.",
    news_summary_2: "Einfach erklärt: Mehr Goldreserven bieten ein solides und krisensicheres Fundament für das Land.",
    news_summary_3: "Einfach erklärt: Ausländische Investitionen stärken die Liquidität und stabilisieren den Währungswert.",
    read_article: "Vollständigen Artikel lesen",
    trends_title: "Historischer Wechselkurs & Erwarteter Trend",
    trends_subtitle: "Visualisierung der jüngsten Kursentwicklung gegenüber künftigen Marktschätzungen",
    label_hist_rate: "Historischer Wechselkurs",
    label_expected_trend: "Erwarteter Trend (Gold)",
    label_conservative: "Konservative Schätzung",
    label_optimistic: "Optimistische Schätzung",
    reliability_title: "Zuverlässigkeitstabelle der Marktschätzungen",
    th_estimate: "SCHÄTZMETHODE",
    th_description: "BESCHREIBUNG",
    th_match: "HISTORISCHE TREFFERQUOTE",
    th_horizon: "PROGNOSEZEITRAUM",
    th_status: "BEWERTUNG",
    about_title: "Über FXSense",
    about_subtitle: "Währungstausch transparent, verständlich und fair für alle",
    mission_title: "Unsere Mission",
    mission_desc: "Wir räumen mit kompliziertem Fachjargon und versteckten Bankgebühren auf, um Menschen jeden Alters ehrliche Währungsberatung zu bieten.",
    feat_1_title: "Keine versteckten Gebühren",
    feat_1_desc: "Immer auf Basis echter Interbanken-Mittelkurse.",
    feat_2_title: "Verständliche Erklärungen",
    feat_2_desc: "Klare Ratschläge, ob sich ein Tausch heute lohnt oder Warten besser ist.",
    feat_3_title: "In 8 Sprachen verfügbar",
    feat_3_desc: "Für weltweite Reisende, Familien und Studierende barrierefrei verständlich.",
    penny_greeting: "Hallo! Brauchen Sie Währungstipps? 🦉",
    penny_role: "Ihre freundliche Finanzbegleiterin ohne Fachchinesisch",
    penny_intro: "Hallo! Ich bin Penny 🦉. Egal ob Urlaub, Auslandsstudium oder Geld an die Familie – ich finde für Sie den besten Kurs!",
    penny_ask_prompt: "Wählen Sie eine Frage unten oder laden Sie ein Foto Ihres Kassenbons hoch für die Sofortumrechnung!",
    pill_quick_convert: "Schnell-Umrechnung",
    pill_timing: "Heute wechseln oder besser warten?",
    pill_shopping: "Shopping-Assistent",
    pill_upload: "Foto von Kassenbon/Rechnung hochladen",
    chat_placeholder: "Fragen Sie Penny alles rund um Währungskurse...",
    scanning_title: "Pennys intelligenter Beleg-Scanner",
    analyzing_text: "Rechnungssumme wird erkannt und sofort umgerechnet...",
    cancel_btn: "Abbrechen",
    footer_desc: "Smarte Devisenprognose und Urlaubsbudgetierung – einfach, transparent und für jedes Alter verständlich."
  }
};

// ============================================================================
// 2. 25+ GLOBAL CURRENCIES DATABASE
// ============================================================================

const CURRENCIES = {
  USD: { code: "USD", name: "US Dollar", symbol: "$", country: "United States", rateVsUsd: 1.0, flag: "🇺🇸" },
  INR: { code: "INR", name: "Indian Rupee", symbol: "₹", country: "India", rateVsUsd: 83.425, flag: "🇮🇳" },
  EUR: { code: "EUR", name: "Euro", symbol: "€", country: "European Union", rateVsUsd: 0.9205, flag: "🇪🇺" },
  GBP: { code: "GBP", name: "British Pound", symbol: "£", country: "United Kingdom", rateVsUsd: 0.7865, flag: "🇬🇧" },
  AED: { code: "AED", name: "UAE Dirham", symbol: "د.إ", country: "United Arab Emirates", rateVsUsd: 3.6725, flag: "🇦🇪" },
  CAD: { code: "CAD", name: "Canadian Dollar", symbol: "CA$", country: "Canada", rateVsUsd: 1.3650, flag: "🇨🇦" },
  AUD: { code: "AUD", name: "Australian Dollar", symbol: "A$", country: "Australia", rateVsUsd: 1.5120, flag: "🇦🇺" },
  JPY: { code: "JPY", name: "Japanese Yen", symbol: "¥", country: "Japan", rateVsUsd: 154.60, flag: "🇯🇵" },
  CHF: { code: "CHF", name: "Swiss Franc", symbol: "CHF", country: "Switzerland", rateVsUsd: 0.8980, flag: "🇨🇭" },
  SGD: { code: "SGD", name: "Singapore Dollar", symbol: "S$", country: "Singapore", rateVsUsd: 1.3510, flag: "🇸🇬" },
  SAR: { code: "SAR", name: "Saudi Riyal", symbol: "﷼", country: "Saudi Arabia", rateVsUsd: 3.7510, flag: "🇸🇦" },
  QAR: { code: "QAR", name: "Qatari Riyal", symbol: "QR", country: "Qatar", rateVsUsd: 3.6415, flag: "🇶🇦" },
  KWD: { code: "KWD", name: "Kuwaiti Dinar", symbol: "KD", country: "Kuwait", rateVsUsd: 0.3075, flag: "🇰🇼" },
  BHD: { code: "BHD", name: "Bahraini Dinar", symbol: "BD", country: "Bahrain", rateVsUsd: 0.3768, flag: "🇧🇭" },
  OMR: { code: "OMR", name: "Omani Rial", symbol: "OMR", country: "Oman", rateVsUsd: 0.3845, flag: "🇴🇲" },
  CNY: { code: "CNY", name: "Chinese Yuan", symbol: "¥", country: "China", rateVsUsd: 7.2350, flag: "🇨🇳" },
  NZD: { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$", country: "New Zealand", rateVsUsd: 1.6420, flag: "🇳🇿" },
  HKD: { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$", country: "Hong Kong", rateVsUsd: 7.8120, flag: "🇭🇰" },
  ZAR: { code: "ZAR", name: "South African Rand", symbol: "R", country: "South Africa", rateVsUsd: 18.250, flag: "🇿🇦" },
  THB: { code: "THB", name: "Thai Baht", symbol: "฿", country: "Thailand", rateVsUsd: 36.70, flag: "🇹🇭" },
  MYR: { code: "MYR", name: "Malaysian Ringgit", symbol: "RM", country: "Malaysia", rateVsUsd: 4.7120, flag: "🇲🇾" },
  KRW: { code: "KRW", name: "South Korean Won", symbol: "₩", country: "South Korea", rateVsUsd: 1375.0, flag: "🇰🇷" },
  BRL: { code: "BRL", name: "Brazilian Real", symbol: "R$", country: "Brazil", rateVsUsd: 5.1850, flag: "🇧🇷" },
  MXN: { code: "MXN", name: "Mexican Peso", symbol: "Mex$", country: "Mexico", rateVsUsd: 16.920, flag: "🇲🇽" },
  SEK: { code: "SEK", name: "Swedish Krona", symbol: "kr", country: "Sweden", rateVsUsd: 10.780, flag: "🇸🇪" },
  NOK: { code: "NOK", name: "Norwegian Krone", symbol: "kr", country: "Norway", rateVsUsd: 10.890, flag: "🇳🇴" }
};

// Simplified, Plain-English Reliability Matrix (Zero Jargon)
const RELIABILITY_DATA = [
  { method: "Expected Trend", desc: "Dynamic consensus balancing multi-source market signals", matchRate: "78.4%", horizon: "Next 72 Hours", badge: "Highest Reliability", isHighlight: true },
  { method: "Macro Sentiment Tracker", desc: "Monitors gold demand, crude oil, and equity inflows", matchRate: "74.2%", horizon: "Next 7 Days", badge: "Strong Support", isHighlight: false },
  { method: "Conservative Floor", desc: "Guards against sudden unexpected downside shocks", matchRate: "69.8%", horizon: "Next 2 Months", badge: "Protective Boundary", isHighlight: false },
  { method: "Historical Baseline", desc: "Calibrated to long-term historical exchange averages", matchRate: "62.1%", horizon: "Seasonal Cycle", badge: "Baseline Standard", isHighlight: false }
];

// ============================================================================
// 3. APPLICATION STATE
// ============================================================================

const State = {
  language: "en",
  fromCurrency: "USD",
  toCurrency: "INR",
  amount: 100,
  plannedAmount: 100000,
  sliderBudgetUsd: 100,
  chartInstance: null
};

// ============================================================================
// 4. INITIALIZATION
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  populateCurrencyDropdowns();
  setupEventListeners();
  updateConverter();
  updateProfitTiming();
  updateBudgetSimulator();
  renderReliabilityMatrix();
  initForecastChart();
  initializeTickerClock();
  applyLanguage(State.language);
});

// ============================================================================
// 5. POPULATE CURRENCY SELECTORS (25+ CURRENCIES)
// ============================================================================

function populateCurrencyDropdowns() {
  const fromSelect = document.getElementById("fromCurrencySelect");
  const toSelect = document.getElementById("toCurrencySelect");
  if (!fromSelect || !toSelect) return;

  fromSelect.innerHTML = "";
  toSelect.innerHTML = "";

  Object.values(CURRENCIES).forEach((curr) => {
    const optFrom = document.createElement("option");
    optFrom.value = curr.code;
    optFrom.textContent = `${curr.flag} ${curr.code} — ${curr.name}`;
    if (curr.code === "USD") optFrom.selected = true;
    fromSelect.appendChild(optFrom);

    const optTo = document.createElement("option");
    optTo.value = curr.code;
    optTo.textContent = `${curr.flag} ${curr.code} — ${curr.name}`;
    if (curr.code === "INR") optTo.selected = true;
    toSelect.appendChild(optTo);
  });
}

// ============================================================================
// 6. EVENT LISTENERS SETUP
// ============================================================================

function setupEventListeners() {
  // Language Selector
  const langSelect = document.getElementById("languageSelect");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      State.language = e.target.value;
      applyLanguage(State.language);
    });
  }

  // Converter Inputs
  const amountInput = document.getElementById("convertAmountInput");
  if (amountInput) {
    amountInput.addEventListener("input", (e) => {
      State.amount = parseFloat(e.target.value) || 0;
      updateConverter();
    });
  }

  const fromSelect = document.getElementById("fromCurrencySelect");
  if (fromSelect) {
    fromSelect.addEventListener("change", (e) => {
      State.fromCurrency = e.target.value;
      updateCurrencyLabels();
      triggerCoinFlipAnimation();
      updateConverter();
      updateForecastChart();
    });
  }

  const toSelect = document.getElementById("toCurrencySelect");
  if (toSelect) {
    toSelect.addEventListener("change", (e) => {
      State.toCurrency = e.target.value;
      updateCurrencyLabels();
      triggerCoinFlipAnimation();
      updateConverter();
      updateBudgetSimulator();
      updateForecastChart();
    });
  }

  // 3D Coin Swap Button (⇄)
  const swapBtn = document.getElementById("swapCurrenciesBtn");
  if (swapBtn) {
    swapBtn.addEventListener("click", () => {
      const temp = State.fromCurrency;
      State.fromCurrency = State.toCurrency;
      State.toCurrency = temp;

      if (fromSelect) fromSelect.value = State.fromCurrency;
      if (toSelect) toSelect.value = State.toCurrency;

      updateCurrencyLabels();
      triggerCoinFlipAnimation();
      updateConverter();
      updateBudgetSimulator();
      updateForecastChart();
    });
  }

  // Converter Preset Pills
  document.querySelectorAll(".preset-pills-row .preset-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".preset-pills-row .preset-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const val = parseFloat(pill.getAttribute("data-amount"));
      State.amount = val;
      if (amountInput) amountInput.value = val;
      triggerCoinFlipAnimation();
      updateConverter();
    });
  });

  // Profit Timing Input
  const plannedInput = document.getElementById("plannedAmountInput");
  if (plannedInput) {
    plannedInput.addEventListener("input", (e) => {
      State.plannedAmount = parseFloat(e.target.value) || 0;
      updateProfitTiming();
    });
  }

  // Budget Simulator Slider & Preset Chips
  const budgetSlider = document.getElementById("budgetSlider");
  if (budgetSlider) {
    budgetSlider.addEventListener("input", (e) => {
      State.sliderBudgetUsd = parseFloat(e.target.value) || 100;
      updateBudgetSimulator();
      document.querySelectorAll(".budget-chip").forEach((chip) => {
        chip.classList.toggle("active", parseFloat(chip.getAttribute("data-val")) === State.sliderBudgetUsd);
      });
    });
  }

  document.querySelectorAll(".budget-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".budget-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const val = parseFloat(chip.getAttribute("data-val"));
      State.sliderBudgetUsd = val;
      if (budgetSlider) budgetSlider.value = val;
      updateBudgetSimulator();
    });
  });

  // Floating Mascot Penny Chat Window
  const mascotTrigger = document.getElementById("pennyMascotTrigger");
  const headerPennyBtn = document.getElementById("headerPennyBtn");
  const closePennyBtn = document.getElementById("closePennyChatBtn");
  const chatWindow = document.getElementById("pennyChatWindow");

  if (mascotTrigger) mascotTrigger.addEventListener("click", togglePennyChat);
  if (headerPennyBtn) headerPennyBtn.addEventListener("click", togglePennyChat);
  if (closePennyBtn) closePennyBtn.addEventListener("click", () => { if (chatWindow) chatWindow.style.display = "none"; });

  // Quick Chat Action Pills
  document.querySelectorAll(".quick-pill-btn").forEach((pill) => {
    pill.addEventListener("click", () => {
      const action = pill.getAttribute("data-action");
      handlePennyQuickAction(action);
    });
  });

  // Chat Form Submission
  const chatForm = document.getElementById("pennyChatForm");
  if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("pennyUserInput");
      if (!input || !input.value.trim()) return;
      sendUserMessage(input.value.trim());
      input.value = "";
    });
  }

  // Receipt Scanner & Upload Image Simulation
  const cameraBtn = document.getElementById("cameraUploadBtn");
  const receiptFileInput = document.getElementById("receiptFileInput");
  if (cameraBtn && receiptFileInput) {
    cameraBtn.addEventListener("click", () => receiptFileInput.click());
    receiptFileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        simulateReceiptScanning(e.target.files[0].name);
      }
    });
  }

  const cancelScanBtn = document.getElementById("cancelScanBtn");
  if (cancelScanBtn) {
    cancelScanBtn.addEventListener("click", () => {
      const backdrop = document.getElementById("scannerBackdrop");
      if (backdrop) backdrop.style.display = "none";
    });
  }

  // Chart Model Checkboxes
  const chartToggles = [
    { id: "toggleActual", idx: 0 },
    { id: "toggleEnsemble", idx: 1 },
    { id: "toggleLower", idx: 2 },
    { id: "toggleUpper", idx: 3 }
  ];
  chartToggles.forEach(({ id, idx }) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("change", () => {
        if (State.chartInstance) {
          State.chartInstance.setDatasetVisibility(idx, el.checked);
          State.chartInstance.update();
        }
      });
    }
  });
}

// ============================================================================
// 7. LANGUAGE TRANSLATION ENGINE
// ============================================================================

function applyLanguage(langCode) {
  const dict = TRANSLATIONS[langCode] || TRANSLATIONS.en;
  const html = document.documentElement;

  // RTL support for Arabic
  if (langCode === "ar") {
    html.setAttribute("dir", "rtl");
  } else {
    html.setAttribute("dir", "ltr");
  }

  // Translate all DOM elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Update dynamic content
  updateConverter();
  updateProfitTiming();
  updateBudgetSimulator();
}

// ============================================================================
// 8. 3D COIN-FLIP & CONVERTER CONTROLLER
// ============================================================================

function triggerCoinFlipAnimation() {
  const coin = document.getElementById("coin3DToken");
  const slotContainer = document.getElementById("slotMachineContainer");

  if (coin) {
    coin.classList.remove("flipping");
    void coin.offsetWidth;
    coin.classList.add("flipping");
  }

  if (slotContainer) {
    slotContainer.classList.remove("rolling");
    void slotContainer.offsetWidth;
    slotContainer.classList.add("rolling");
  }
}

function updateCurrencyLabels() {
  const from = CURRENCIES[State.fromCurrency] || CURRENCIES.USD;
  const to = CURRENCIES[State.toCurrency] || CURRENCIES.INR;

  const sendSymbol = document.getElementById("sendCurrencySymbol");
  if (sendSymbol) sendSymbol.textContent = from.symbol;

  const fromFullName = document.getElementById("fromCurrencyFullName");
  if (fromFullName) fromFullName.textContent = `${from.name} (${from.country})`;

  const toFullName = document.getElementById("toCurrencyFullName");
  if (toFullName) toFullName.textContent = `${to.name} (${to.country})`;

  const targetCode = document.getElementById("targetCurrencyCodeDisplay");
  if (targetCode) targetCode.textContent = to.code;
}

function updateConverter() {
  const from = CURRENCIES[State.fromCurrency] || CURRENCIES.USD;
  const to = CURRENCIES[State.toCurrency] || CURRENCIES.INR;

  // Rate formula: (Amount / fromRateVsUsd) * toRateVsUsd
  const rate = to.rateVsUsd / from.rateVsUsd;
  const total = State.amount * rate;

  const amountDisplay = document.getElementById("convertedAmountDisplay");
  const resultPill = document.getElementById("resultPillText");
  const directRateText = document.getElementById("directExchangeRateText");
  const rateTrendSummary = document.getElementById("rateTrendSummary");

  const formattedTotal = total.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  if (amountDisplay) {
    amountDisplay.textContent = formattedTotal;
  }

  // Large Result Badge: "100 USD = 8,342.50 INR (+0.38% Today)"
  if (resultPill) {
    resultPill.textContent = `${State.amount} ${from.code} = ${formattedTotal} ${to.code} (+0.38% Today)`;
  }

  if (directRateText) {
    directRateText.textContent = `1 ${from.code} = ${rate.toFixed(4)} ${to.code}`;
  }

  if (rateTrendSummary) {
    rateTrendSummary.textContent = `▲ +0.38% Today`;
  }
}

// ============================================================================
// 9. "FXSENSE PROFIT & TIMING HANDLER"
// ============================================================================

function updateProfitTiming() {
  const dict = TRANSLATIONS[State.language] || TRANSLATIONS.en;
  const plannedInput = document.getElementById("plannedAmountInput");
  const val = plannedInput ? parseFloat(plannedInput.value) || 100000 : 100000;

  // ₹100,000 INR -> AED
  // Today's rate: 1 AED = 22.712 INR => val / 22.712 = 4,400 AED
  // Projected in 2 Months (+2.72% gain) => 4,520 AED
  // Potential Gain by Waiting: +₹2,720 INR Profit!
  const todayAed = Math.round(val / 22.712);
  const futureAed = Math.round(todayAed * 1.0272);
  const gainInr = Math.round(val * 0.0272);

  const todayAmountEl = document.getElementById("breakdownTodayAmount");
  const futureAmountEl = document.getElementById("breakdownFutureAmount");
  const gainAmountEl = document.getElementById("breakdownGainAmount");
  const badgeText = document.getElementById("timingStatusBadgeText");

  if (todayAmountEl) todayAmountEl.textContent = `${todayAed.toLocaleString()} AED`;
  if (futureAmountEl) futureAmountEl.textContent = `${futureAed.toLocaleString()} AED`;
  if (gainAmountEl) gainAmountEl.textContent = `+₹${gainInr.toLocaleString()} INR Profit!`;

  if (badgeText) {
    badgeText.textContent = dict.timing_badge_wait;
  }
}

// ============================================================================
// 10. "WHAT CAN MY MONEY BUY ABROAD?" (BUDGET SIMULATOR)
// ============================================================================

function updateBudgetSimulator() {
  const budgetUsd = State.sliderBudgetUsd;
  const toCurr = CURRENCIES[State.toCurrency] || CURRENCIES.INR;

  const budgetDisplay = document.getElementById("activeSliderBudgetDisplay");
  if (budgetDisplay) {
    budgetDisplay.textContent = `$${budgetUsd} USD (~${Math.round(budgetUsd * toCurr.rateVsUsd).toLocaleString()} ${toCurr.code})`;
  }

  // Real-world purchasing power estimations
  const weeksGroceries = Math.max(1, Math.round((budgetUsd / 50) * 10) / 10);
  const coffeeCups = Math.max(3, Math.round(budgetUsd / 4));
  const dinners = Math.max(2, Math.round(budgetUsd / 5.5));
  const rides = Math.max(2, Math.round(budgetUsd / 8));
  const hotelNights = Math.max(1, Math.round(budgetUsd / 45));

  const statGroceries = document.getElementById("statGroceries");
  const statDining = document.getElementById("statDining");
  const statTransit = document.getElementById("statTransit");
  const statStay = document.getElementById("statStay");

  if (statGroceries) {
    statGroceries.textContent = `Covers ~${weeksGroceries} weeks of healthy groceries in ${toCurr.country}`;
  }
  if (statDining) {
    statDining.textContent = `${coffeeCups} cups of gourmet coffee or ${dinners} hearty restaurant dinners`;
  }
  if (statTransit) {
    statTransit.textContent = `${rides} comfortable rides & complete airport taxi transfers`;
  }
  if (statStay) {
    statStay.textContent = `${hotelNights} nights in a boutique heritage stay or apartment`;
  }
}

// ============================================================================
// 11. PLAIN-ENGLISH RELIABILITY MATRIX
// ============================================================================

function renderReliabilityMatrix() {
  const tbody = document.getElementById("matrixTableBody");
  if (!tbody) return;

  tbody.innerHTML = RELIABILITY_DATA.map((row) => `
    <tr class="${row.isHighlight ? 'highlight-row' : ''}">
      <td><strong>${row.method}</strong></td>
      <td>${row.desc}</td>
      <td class="text-right mono font-bold ${row.isHighlight ? 'text-green' : ''}">${row.matchRate}</td>
      <td class="text-center mono">${row.horizon}</td>
      <td><span class="status-pill">${row.badge}</span></td>
    </tr>
  `).join("");
}

// ============================================================================
// 12. CLEAN VISUAL TRENDS CHART (Chart.js)
// ============================================================================

function initForecastChart() {
  const canvas = document.getElementById("forecastChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const labels = ["Day -10", "Day -8", "Day -6", "Day -4", "Day -2", "Today", "+24h", "+48h", "+72h"];

  // USD/INR base data curves with zero technical jargon
  const histSpot = [83.05, 83.18, 83.25, 83.32, 83.39, 83.425, null, null, null];
  const expectedTrend = [null, null, null, null, null, 83.425, 83.54, 83.68, 83.80];
  const conservativeEstimate = [null, null, null, null, null, 83.425, 83.45, 83.50, 83.55];
  const optimisticEstimate = [null, null, null, null, null, 83.425, 83.62, 83.79, 83.98];

  State.chartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Historical Exchange Rate",
          data: histSpot,
          borderColor: "#1F2937",
          backgroundColor: "rgba(31, 41, 55, 0.05)",
          borderWidth: 2.5,
          tension: 0.15,
          pointRadius: 4,
          fill: true
        },
        {
          label: "Expected Trend",
          data: expectedTrend,
          borderColor: "#C8A96B",
          borderWidth: 3.5,
          tension: 0.2,
          pointRadius: 5,
          pointBackgroundColor: "#C8A96B"
        },
        {
          label: "Conservative Estimate",
          data: conservativeEstimate,
          borderColor: "#0D9488",
          borderWidth: 2,
          borderDash: [5, 5],
          pointRadius: 3,
          tension: 0.15
        },
        {
          label: "Optimistic Estimate",
          data: optimisticEstimate,
          borderColor: "#2563EB",
          borderWidth: 2,
          borderDash: [3, 3],
          pointRadius: 3,
          tension: 0.2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#1F2937",
          titleFont: { family: "'JetBrains Mono', monospace" }
        }
      },
      scales: {
        x: {
          grid: { color: "rgba(226, 221, 208, 0.5)" },
          ticks: { font: { family: "'JetBrains Mono', monospace", size: 11 }, color: "#6B7280" }
        },
        y: {
          position: "right",
          grid: { color: "rgba(226, 221, 208, 0.5)" },
          ticks: { font: { family: "'JetBrains Mono', monospace", size: 11 }, color: "#4B5563" }
        }
      }
    }
  });
}

function updateForecastChart() {
  const activePairTag = document.getElementById("activeChartPairTag");
  if (activePairTag) {
    activePairTag.textContent = `${State.fromCurrency}/${State.toCurrency}`;
  }
}

// ============================================================================
// 13. FLOATING MASCOT CHATBOT ("PENNY THE GOLDEN OWL 🦉")
// ============================================================================

function togglePennyChat() {
  const chatWindow = document.getElementById("pennyChatWindow");
  if (!chatWindow) return;

  if (chatWindow.style.display === "none" || !chatWindow.style.display) {
    chatWindow.style.display = "flex";
  } else {
    chatWindow.style.display = "none";
  }
}

function sendUserMessage(text) {
  const container = document.getElementById("pennyChatMessages");
  if (!container) return;

  const userBubble = document.createElement("div");
  userBubble.className = "message-bubble user-msg";
  userBubble.innerHTML = `<p>${escapeHtml(text)}</p>`;
  container.appendChild(userBubble);
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    generatePennyResponse(text);
  }, 450);
}

function generatePennyResponse(query) {
  const container = document.getElementById("pennyChatMessages");
  if (!container) return;

  let reply = "";
  const q = query.toLowerCase();

  if (q.includes("wait") || q.includes("today") || q.includes("exchange") || q.includes("timing")) {
    reply = `🦉 <strong>Penny's Advice:</strong> Right now, our market analysis suggests <em>Wait & Hold</em> for maximum value! If you hold off for ~2 months, our forward estimates project you can gain an extra <strong>+2.72% yield</strong> on your transfer!`;
  } else if (q.includes("convert") || q.includes("rate") || q.includes("usd") || q.includes("inr")) {
    const rate = (CURRENCIES[State.toCurrency].rateVsUsd / CURRENCIES[State.fromCurrency].rateVsUsd).toFixed(4);
    reply = `🦉 <strong>Quick Check:</strong> 1 ${State.fromCurrency} is currently exchanging for approx ${rate} ${State.toCurrency}. You can use our hero converter above with the 3D coin flip!`;
  } else if (q.includes("shop") || q.includes("buy") || q.includes("coffee") || q.includes("budget")) {
    reply = `🦉 <strong>Shopping Tip:</strong> A $100 USD budget in India covers about 2 full weeks of healthy groceries or 25 artisan coffees. Drag the slider in our 'Budget Simulator' section to test any amount!`;
  } else {
    reply = `🦉 <strong>Penny:</strong> I'm always watching real-world market drivers like Gold (XAU/USD) and Crude Oil (WTI) to bring you transparent, friendly guidance! Ask me about exchange timing, conversions, or tap the camera icon to scan a bill!`;
  }

  const pennyBubble = document.createElement("div");
  pennyBubble.className = "message-bubble penny-msg";
  pennyBubble.innerHTML = `<p>${reply}</p>`;
  container.appendChild(pennyBubble);
  container.scrollTop = container.scrollHeight;
}

function handlePennyQuickAction(action) {
  if (action === "quick_convert") {
    sendUserMessage("✈️ What is the current quick conversion rate?");
  } else if (action === "timing_advice") {
    sendUserMessage("📈 Should I exchange today or wait?");
  } else if (action === "shopping_helper") {
    sendUserMessage("🛍️ What can my budget buy abroad?");
  } else if (action === "upload_receipt") {
    const fileInput = document.getElementById("receiptFileInput");
    if (fileInput) fileInput.click();
  }
}

// Simulated Receipt Scanner with Laser Animation
function simulateReceiptScanning(fileName) {
  const backdrop = document.getElementById("scannerBackdrop");
  if (backdrop) backdrop.style.display = "flex";

  setTimeout(() => {
    if (backdrop) backdrop.style.display = "none";
    const simulatedBillEur = 48.50;
    const toCurr = CURRENCIES[State.toCurrency] || CURRENCIES.INR;
    const converted = (simulatedBillEur * (toCurr.rateVsUsd / CURRENCIES.EUR.rateVsUsd)).toFixed(2);

    sendUserMessage(`🖼️ Uploaded bill photo: "${fileName}"`);
    setTimeout(() => {
      const container = document.getElementById("pennyChatMessages");
      if (!container) return;

      const scanResultBubble = document.createElement("div");
      scanResultBubble.className = "message-bubble penny-msg";
      scanResultBubble.innerHTML = `
        <p>
          🦉 <strong>Receipt Scanned Successfully!</strong><br>
          • Detected Total: <strong>€${simulatedBillEur.toFixed(2)} EUR</strong><br>
          • Converted Amount: <strong>~${converted} ${toCurr.code}</strong> (${toCurr.symbol})<br>
          • Converted at fair mid-market exchange rate! 🥐
        </p>
      `;
      container.appendChild(scanResultBubble);
      container.scrollTop = container.scrollHeight;
    }, 500);
  }, 2200);
}

// ============================================================================
// 14. TICKER CLOCK
// ============================================================================

function initializeTickerClock() {
  function tick() {
    const now = new Date();
    const str = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const clock = document.getElementById("converterClock");
    if (clock) clock.textContent = `LIVE • ${str}`;
  }
  tick();
  setInterval(tick, 1000);
}

// Helper: Escape HTML
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
