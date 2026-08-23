const handleLogin = () => {
if (email && password.length >= 4) {
navigation.navigate('MainTabs', { email });
}
};

