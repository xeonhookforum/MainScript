// Narzędzia do sieci

// Funkcja do pobierania publicznego adresu IP
function getPublicIP() {
    import("https").then((https) => {
        https.get("https://api.ipify.org?format=json", (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                try {
                    const ipInfo = JSON.parse(data);
                    console.log("Publiczny adres IP:", ipInfo.ip);
                } catch (e) {
                    console.error("Błąd parsowania odpowiedzi:", e);
                }
            });
        }).on("error", (err) => {
            console.error("Błąd podczas pobierania adresu IP:", err);
        });
    }).catch((err) => {
        console.error("Nie można zaimportować modułu 'https':", err);
    });
}

// Funkcja do sprawdzania statusu strony internetowej
function checkWebsiteStatus(url) {
    import("https").then((https) => {
        https.get(url, (res) => {
            console.log(`Status strony ${url}: ${res.statusCode}`);
        }).on("error", (err) => {
            console.error(`Błąd podczas sprawdzania statusu strony ${url}:`, err);
        });
    }).catch((err) => {
        console.error("Nie można zaimportować modułu 'https':", err);
    });
}

// Narzędzia do telefonu (symulowane)

// Funkcja do symulacji wysłania SMS
function sendSMS(phoneNumber, message) {
    console.log(`Wysyłanie SMS do ${phoneNumber}: ${message}`);
    // Tutaj można dodać prawdziwą implementację, np. przez API operatora
}

// Funkcja do symulacji wykonania połączenia telefonicznego
function makePhoneCall(phoneNumber) {
    console.log(`Dzwonienie do ${phoneNumber}...`);
    // Tutaj można dodać prawdziwą implementację, np. przez API operatora
}

// Przykłady użycia
getPublicIP();
checkWebsiteStatus("https://example.com");
sendSMS("+48123456789", "Witaj, to testowy SMS!");
makePhoneCall("+48123456789");
