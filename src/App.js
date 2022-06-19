import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
	return (
		<AuthContextProvider>
			<NavBar></NavBar>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/signin' element={<SignIn></SignIn>}></Route>
				<Route path='/signup' element={<SignUp></SignUp>}></Route>
				<Route
					path='/account'
					element={
						<ProtectedRoute>
							<Account></Account>
						</ProtectedRoute>
					}
				></Route>
			</Routes>
		</AuthContextProvider>
	);
}

export default App;
