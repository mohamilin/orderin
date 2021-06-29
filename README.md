### Step-step

1. Ketik : yarn create reat-app orderin
   - untuk setup aplikasi react
2. Instal package : react-router-dom dan node-sass
   - ketik di terminal : yarn add react-router-dom node-sass
3. membuat bbrpa folder dan file agar lebh reusable
   - Buat folder src > components > button
   - berisi : index.js (kode u/ button), index.sass (kode styling dg sass, disini kta bisa lakukan injek styling jika d bootstrap tdk ada), index.test.js (untuk testing).
   - Buat file src > pages > LandingPage.js
     - Dalam folder pages akan berisikan halaman-halaman yang nantinya kita gunakan sbg router
   - Buat file src > parts > Header.js
     - Dalam folder parts akan berisikan bagian-bagian yang selalu digunakan dalam halaman spt header.
4. Download bootstrapnya :
   - Download source files, disini saya menggunakan boostrap version 4.
   - ekstrak silenya
5. Buat folder assets didalam src, kemudian Setelah di extrak file zip bootstrapnya
   - lalu copy folder sass nya dan letakkan dalam src > assets
   - tambahkan juga folder images didalam src > assets
6. Konfigurasikan file scss nya yang berada di dalam assets dengan :
   - menghapus file bootstrap-reboot.sass dan bootstrap-grid.sass
   - mengganti file bootstrap.scss dengan style.scss
   - import file style.scss ke dalam App.js
7. Konfigurasi tambahan 1 :
   - buat file jsconfig.json
   ```js
   {
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": ["src/**/*"] // agar memudahkan file dalam src dapat saling terkoneksikan, sampai ke dalam path-path nya
    }
   ```
   - tujuan dari penambhan file jsconfig.json untuk memudahkan dalam import berbagai element/components

#### Buat component button

1. import bbrpa package :
   - Masuk k dalam file src > button > index.js
   - Link dari react-router-dom : untuk navigation
   - PropTypes dari prop-types untuk Button tujuannya u/ pengecekan apa saja yang dimiliki / diterima PropTypes oleh Button
   - Kirim parameter props di dalam Button => Button(props)
   - Code tambahan dalam menggunakan propTypes
   ```js
   Button.propTypes = {
     // beberapa property yang dibutuhkan dalam button
     type: propTypes.oneOf(["button", "link"]),
     onClick: propTypes.func, // onClik akan berjalan dengan menggunakan function
     target: propTypes.string,
     isDisabled: propTypes.bool, // klo misalnya link / button nya disable
     isLoading: propTypes.bool, // klo dicklik muncul loading spinner
     isSmall: propTypes.bool, // Ukuran small
     isLarge: propTypes.bool,
     isBlock: propTypes.bool,
     isExternal: propTypes.bool, // jika link nya  nnti akan mengarah ke luar aplikasi, tp klo cuman k dalam cukup pake Link
     hasShadow: propTypes.bool, // utk button dg tampilan punya shadow
   };
   ```
   - implementasi smw proptypes
