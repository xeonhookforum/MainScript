// Importowanie modułów Androida
import("android.widget.Toast");
import("android.content.Context");

// Funkcja do wyświetlania powiadomienia
function showToast(message) {
    // Pobranie kontekstu aplikacji
    const context = ActivityThread.currentApplication().getApplicationContext();

    // Tworzenie i wyświetlanie Toast
    Toast.makeText(context, message, Toast.LENGTH_SHORT).show();
}

// Przykład użycia
showToast("Witaj, to jest testowe powiadomienie!");
