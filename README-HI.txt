STYLEBAZAAR — FREE AFFILIATE WEBSITE STARTER
============================================

यह शुरुआती वेबसाइट HTML/CSS/JavaScript से बनी है। इसे मुफ्त static hosting पर प्रकाशित किया जा सकता है।

फाइलें:
- index.html     वेबसाइट का पेज
- style.css      डिजाइन/रंग/मोबाइल लेआउट
- products.js    प्रोडक्ट्स, कीमत, फोटो URL और affiliate URLs
- app.js         सर्च और कैटेगरी फिल्टर

प्रोडक्ट जोड़ने/बदलने का तरीका:
1. products.js को VS Code या Notepad में खोलें।
2. PRODUCTS सूची में किसी प्रोडक्ट की कॉपी बनाएं या पुराना उदाहरण बदलें।
3. name, category, price, oldPrice, tag, description, image, affiliateUrl और store भरें।
4. image में ऐसी फोटो का URL दें जिसे इस्तेमाल करने का अधिकार हो।
5. affiliateUrl में संबंधित affiliate program से मिला पूरा tracking URL डालें।
6. फाइल सेव करें और वेबसाइट को फिर से प्रकाशित करें।

ध्यान दें:
- अभी दिए गए सभी प्रोडक्ट केवल demo examples हैं। वे वास्तविक लिस्टिंग या सत्यापित कीमतें नहीं हैं।
- "#" लिंक वाले बटन अभी affiliate बिक्री नहीं करेंगे। असली affiliate URLs जोड़ें।
- हर कंपनी का affiliate program अलग होता है; पहले पात्रता/स्वीकृति और नियम जांचें।
- केवल उन फोटो/लोगो/विवरण का उपयोग करें जिन्हें इस्तेमाल करने की अनुमति है।
- यह starter package अपने आप secure admin login नहीं बनाता। अगला चरण backend/database और सुरक्षित admin authentication जोड़ना होगा। सिर्फ front-end में password रखना सुरक्षित नहीं है।
- Affiliate disclosure को अपने वास्तविक business और संबंधित program की शर्तों के अनुसार अपडेट करें।
- Google Fonts के लिए इंटरनेट कनेक्शन चाहिए; font उपलब्ध न हो तो वेबसाइट fallback fonts उपयोग करेगी।

मुफ्त में ऑनलाइन प्रकाशित करने का सामान्य तरीका:
1. GitHub पर अकाउंट बनाएं और एक नया repository बनाएं।
2. इस ZIP की फाइलें repository में upload करें।
3. Cloudflare Pages में GitHub repository connect करें।
4. Framework preset: None; build command खाली; output directory / (root) चुनें।
5. Deploy करें। स्क्रीन पर जो live URL मिले, उसे लोगों के साथ शेयर करें।

बाद में:
- admin panel के लिए backend/database और authentication जोड़ना होगा।
- सभी कंपनियों के affiliate links अपने आप नहीं मिलते; हर program के लिए अलग से apply/approve होना पड़ सकता है।
