import { useState } from "react";
import ExpenseList from "./ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Buy a book", amount: 30, category: "Books" },
    { id: 2, description: "Buy a pen", amount: 10, category: "Stationary" },
    {
      id: 3,
      description: "Buy a laptop",
      amount: 300,
      category: "Electronics",
    },
  ]);

  return (
    <div className="p-4">
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
};

export default App;
