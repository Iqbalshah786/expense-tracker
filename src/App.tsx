import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Bought vegetables",
      amount: 30,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Watched  movie",
      amount: 20,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "Pay electricity bills",
      amount: 100,
      category: "Utilities",
    },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="p-4">
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
};

export default App;
