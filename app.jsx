// App.jsx
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");

  const handleLogin = (name) => {
    setUser({ name });
    setPage("menu");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
      {page === "login" && (
        <div className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center">
          <img src="/logo.png" alt="לוגו" className="mx-auto w-20 mb-4" />
          <h1 className="text-2xl font-bold mb-6">ברוך הבא</h1>
          <input
            type="text"
            placeholder="שם משתמש"
            className="w-full mb-4 p-2 border rounded-lg"
            onKeyDown={(e) => e.key === "Enter" && handleLogin(e.target.value)}
          />
          <button
            onClick={() => handleLogin("משתמש")}
            className="w-full bg-blue-500 text-white py-2 rounded-lg shadow"
          >
            כניסה
          </button>
        </div>
      )}

      {page === "menu" && (
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-center">
            שלום {user?.name}
          </h2>
          <div className="grid gap-4">
            <button
              onClick={() => setPage("sales")}
              className="bg-white shadow rounded-xl p-6 text-lg"
            >
              📝 מכירת סת"ם
            </button>
            <button
              onClick={() => setPage("check")}
              className="bg-white shadow rounded-xl p-6 text-lg"
            >
              🔍 בדיקת סת"ם
            </button>
          </div>
        </div>
      )}

      {page === "sales" && (
        <FormSales goBack={() => setPage("menu")} />
      )}

      {page === "check" && (
        <FormCheck goBack={() => setPage("menu")} />
      )}
    </div>
  );
}

function FormSales({ goBack }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
      <h3 className="text-xl font-bold mb-4">מכירת סת"ם</h3>
      <input placeholder="שם" className="input" />
      <input placeholder="טלפון" className="input" />
      <input placeholder="אימייל" className="input" />
      <input placeholder="טלפון נייד" className="input" />
      <select className="input">
        <option>מזוזה 12</option>
        <option>מזוזה 15</option>
        <option>מזוזה 25</option>
      </select>
      <input placeholder="תשלום" className="input" />
      <input placeholder="סוג תשלום" className="input" />
      <textarea placeholder="הערות" className="input" />
      <button onClick={goBack} className="btn">חזרה</button>
    </div>
  );
}

function FormCheck({ goBack }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
      <h3 className="text-xl font-bold mb-4">בדיקת סת"ם</h3>
      <input placeholder="שם" className="input" />
      <input placeholder="טלפון" className="input" />
      <input placeholder="אימייל" className="input" />
      <input placeholder="טלפון נייד" className="input" />
      <input placeholder="מיקום המזוזה בבית" className="input" />
      <textarea placeholder="הערות" className="input" />
      <button onClick={goBack} className="btn">חזרה</button>
    </div>
  );
}

export default App;
