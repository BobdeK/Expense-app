import { useContext } from 'react';

// import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-contex';
import ExpensesOutput from "../Components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);

    return (
        <ExpensesOutput
            expenses={expensesCtx.expenses}
            expensesPeriod="Total"
            fallbackText="No registered expenses found!"
        />
    );
}

export default AllExpenses;
