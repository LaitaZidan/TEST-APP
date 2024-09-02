

class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

            <section class="bg-bg-app dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="max-w-24 mr-2" src="https://hkinfrastruktur.com/file/2023/12/Logo-HKI-1-e1703085110638.png" alt="logo">
                        Hutama Karya Insfrastruktur    
                    </a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                masuk ke akun anda
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Pengguna</label>
                                    <input type="text" name="username" id="username" placeholder="masukkan nama pengguna anda" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kata Sandi</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Ingat saya</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-white">Lupa kata sandi?</a>
                                </div>
                                <button type="submit" class="w-full text-white bg-red-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Masuk</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    tidak punya akun? <a href="signup" data-signup class="font-medium text-primary-600 hover:underline dark:text-primary-500">Daftar</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

class SignUpForm extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <section class="bg-bg-app dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="max-w-24 mr-2" src="public/images/hki-logo.png" alt="logo">
                Hutama Karya Insfrastruktur
            </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Daftar akun
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="username"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                                Pengguna</label>
                            <input type="text" name="username" id="username" placeholder="masukkan nama pengguna anda"
                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="">
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kata Sandi</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="">
                        </div>
                        <div class="max-w-sm mx-auto">
                            <label for="jenis-kelamin"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Kelamin
                            </label>
                            <select id="jenis-kelamin"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Jenis Kelamin</option>
                                <option value="L">Laki - Laki</option>
                                <option value="P">Perempuan</option>
                            </select>
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-red-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Daftar</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            sudah punya akun? <a href="login" data-login
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

// Register Custom Elements
customElements.define('login-form', LoginForm);
customElements.define('sign-up-form', SignUpForm);

function loadContent(route) {
    const appContent = document.getElementById('app-content');
    appContent.innerHTML = ''; // membersihkan konten sebelumnya

    let newElement;
    if (route === 'login') {
        newElement = new LoginForm(); // menggunakan konstruktor untuk membuat elemen kustom
        console.log(`Navigating to ${route}`);
    } else if (route === 'signup') {
        newElement = new SignUpForm(); // menggunakan konstruktor untuk membuat elemen kustom
        console.log(`Navigating to ${route}`);
    }

    if (newElement) {
        appContent.appendChild(newElement); // menambahkan elemen yang sudah dibuat ke dalam appContent
    }
}

window.addEventListener('DOMContentLoaded', () => {

    loadContent('login');
    document.querySelector('a[data-signup]').addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah link default behavior
        loadContent('signup');
    });
    document.querySelector('a[data-login]').addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah link default behavior
        loadContent('login');
    });
});



