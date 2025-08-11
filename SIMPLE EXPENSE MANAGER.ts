import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [textIncome, setTextIncome] = useState('');
  const [textExpense, setTextExpense] = useState('');

  const addIncome = () => {
    if (textIncome === '' || income === '') {
      alert('Please enter the details');
    } else {
      setIncomeList([...incomeList, { id: Math.random().toString(), income: income }]);
      setIncome(parseInt(income) + parseInt(income));
      setTextIncome('');
    }
  };

  const addExpense = () => {
    if (textExpense === '' || expense === '') {
      alert('Please enter the details');
    } else {
      setExpenseList([...expenseList, { id: Math.random().toString(), expense: expense }]);
      setExpense(parseInt(expense) + parseInt(expense));
      setTextExpense('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Manager</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Income"
          keyboardType="numeric"
          value={textIncome}
          onChangeText={(text) => setIncome(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => addIncome()}>
          <Text style={styles.buttonText}>Add Income</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Enter Expense"
          keyboardType="numeric"
          value={textExpense}
          onChangeText={(text) => setExpense(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => addExpense()}>
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.list}>
          <Text style={styles.listTitle}>Weekly Income</Text>
          {incomeList.map((item) => (
            <View key={item.id} style={styles.listItem}>
              <Text>{item.income}</Text>
            </View>
          ))}
        </View>
        <View style={styles.list}>
          <Text style={styles.listTitle}>Weekly Expense</Text>
          {expenseList.map((item) => (
            <View key={item.id} style={styles.listItem}>
              <Text>{item.expense}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    marginVertical: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#f4511e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
