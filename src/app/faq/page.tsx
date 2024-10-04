"use client";
import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Jak mogę złożyć zamówienie?",
    answer:
      "Aby złożyć zamówienie, wybierz interesujące Cię produkty, dodaj je do koszyka, a następnie przejdź do procesu finalizacji zamówienia, podając niezbędne dane do dostawy i płatności.",
  },
  {
    question: "Jakie są dostępne metody płatności?",
    answer:
      "Akceptujemy płatności kartą kredytową, przelewem bankowym, PayPal oraz płatności przy odbiorze.",
  },
  {
    question: "Ile trwa dostawa?",
    answer:
      "Standardowy czas dostawy wynosi 2-5 dni roboczych. W przypadku produktów spersonalizowanych, czas dostawy może się wydłużyć do 7-10 dni roboczych.",
  },
  {
    question: "Czy mogę zwrócić lub wymienić produkt?",
    answer:
      "Tak, masz 14 dni na zwrot lub wymianę produktu od daty jego otrzymania. Produkt musi być nieużywany i w oryginalnym opakowaniu.",
  },
  {
    question: "Czy oferujecie darmową dostawę?",
    answer: "Tak, oferujemy darmową dostawę dla zamówień powyżej 200 zł.",
  },
];

const FaqItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{item.question}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{item.answer}</p>}
    </div>
  );
};

const FaqPage: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Często Zadawane Pytania</h1>
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <FaqItem key={index} item={item} />
      ))}
    </div>
  </div>
);

export default FaqPage;
