import SymptomForm from "../components/health/SymptomForm";

export default function Dashboard() {
  return (
    <div className="bg-gray-50">

      {/* 🔝 HEADER */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">

            <div className="flex items-center">
              <h1 className="text-white font-bold text-lg">
                AI Health
              </h1>
            </div>

            <div className="hidden lg:flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white">Features</a>
              <a href="#" className="text-gray-400 hover:text-white">About</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </div>

          </div>
        </div>
      </header>

      {/* 🔥 HERO SECTION */}
      <section className="relative py-16 bg-gray-900">
        <div className="absolute inset-0 hidden lg:block">
          <img
            className="object-cover object-right-bottom w-full h-full opacity-40"
            src="https://images.unsplash.com/photo-1584515933487-779824d29309"
            alt=""
          />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl">
          <div className="max-w-xl text-center lg:text-left">

            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              AI Health Companion
            </h1>

            <p className="mt-4 text-gray-400">
              Get instant AI-powered insights based on your symptoms and improve your health decisions.
            </p>

            <div className="mt-6">
              <a
                href="#checker"
                className="px-5 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-200"
              >
                Try Symptom Checker
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 🧠 SYMPTOM CHECKER */}
      <section id="checker" className="max-w-2xl mx-auto px-4 -mt-10">
        <div className="bg-white shadow-lg rounded-xl p-5">
          <h2 className="text-xl font-semibold mb-3 text-center">
            Symptom Checker
          </h2>
          <SymptomForm />
        </div>
      </section>

      {/* ⚡ FEATURES */}
      <section className="max-w-6xl mx-auto px-4 mt-14 grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <img
            src="https://images.unsplash.com/photo-1588776814546-ec7e6c64f9d3"
            className="h-[130px] w-full object-cover rounded-md mb-3"
          />
          <h3 className="font-semibold">AI Analysis</h3>
          <p className="text-sm text-gray-600">
            Smart detection of possible health conditions.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67"
            className="h-[130px] w-full object-cover rounded-md mb-3"
          />
          <h3 className="font-semibold">Health Tracking</h3>
          <p className="text-sm text-gray-600">
            Monitor daily habits and wellness.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <img
            src="https://images.unsplash.com/photo-1580281657527-47f249eebc4c"
            className="h-[130px] w-full object-cover rounded-md mb-3"
          />
          <h3 className="font-semibold">Secure Data</h3>
          <p className="text-sm text-gray-600">
            Privacy-first approach to health data.
          </p>
        </div>

      </section>

      {/* 📖 ABOUT */}
      <section className="max-w-5xl mx-auto px-4 mt-16 grid md:grid-cols-2 gap-8 items-center">

        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
          className="h-[220px] w-full object-cover rounded-xl"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            About AI Health Companion
          </h2>
          <p className="text-gray-600 text-sm mb-3">
            AI Health Companion provides quick and accessible health insights using intelligent systems.
          </p>
          <p className="text-gray-600 text-sm">
            Designed for simplicity, it helps users make informed decisions about their wellbeing.
          </p>
        </div>

      </section>

      {/* 🧾 FOOTER */}
      <footer className="bg-gray-900 text-white mt-16 py-6 text-center text-sm">
        <p>© 2026 AI Health Companion</p>
        <p className="text-gray-400 mt-1">
          Not a medical diagnosis tool. Always consult professionals.
        </p>
      </footer>

    </div>
  );
}