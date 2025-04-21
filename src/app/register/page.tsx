"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    };
    let hasError = false;

    if (!firstName.trim()) {
      newErrors.firstName = "Le prénom est requis.";
      hasError = true;
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Le nom est requis.";
      hasError = true;
    }
    if (!email.trim()) {
      newErrors.email = "L'email est requis.";
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "L'email n'est pas valide.";
      hasError = true;
    }
    if (!password.trim()) {
      newErrors.password = "Le mot de passe est requis.";
      hasError = true;
    }else if (
        password.length < 8 ||
        !/[A-Z]/.test(password) ||
        !/[0-9]/.test(password) ||
        !/[!@#$%^&*]/.test(password)
      ) {
        newErrors.password =
          "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.";
        hasError = true;
      }
      
    if (!phone.trim()) {
      newErrors.phone = "Le numéro est requis.";
      hasError = true;
    } else if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Le numéro doit contenir exactement 10 chiffres.";
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password, phone }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Inscription réussie !");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setErrors({ firstName: "", lastName: "", email: "", password: "", phone: "" });
      router.push("/");
      router.refresh();
    } else {
      alert(data.message || "Erreur lors de l'inscription.");
    }
  };

  return (
    <main className="flex flex-col flex-grow justify-center items-center min-h-screen p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <div className="flex flex-row w-full">
          <div className="w-full">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`border p-2 rounded m-1 w-full ${errors.firstName ? "border-red-500" : ""}`}
            />
            {errors.firstName && <p className="text-red-500 text-sm -mt-2 ml-2">{errors.firstName}</p>}
          </div>

          <div className="w-full">
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`border p-2 rounded m-1 w-full ${errors.lastName ? "border-red-500" : ""}`}
            />
            {errors.lastName && <p className="text-red-500 text-sm -mt-2 ml-2">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`border p-2 rounded m-1 w-full ${errors.phone ? "border-red-500" : ""}`}
          />
          {errors.phone && <p className="text-red-500 text-sm -mt-2 ml-2">{errors.phone}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border p-2 rounded m-1 w-full ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && <p className="text-red-500 text-sm -mt-2 ml-2">{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`border p-2 rounded m-1 w-full ${errors.password ? "border-red-500" : ""}`}
          />
          {errors.password && <p className="text-red-500 text-sm -mt-2 ml-2">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-600"
        >
          Register
        </button>
      </form>
    </main>
  );
}
