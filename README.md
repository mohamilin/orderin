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

- import bbrpa package :
  - Masuk k dalam file src > button > index.js
  - Link dari react-router-dom : untuk navigation
  - PropTypes dari prop-types untuk Button tujuannya u/ pengecekan apa saja yang dimiliki / diterima PropTypes oleh Button
  - Kirim parameter props di dalam Button => Button(props)
  - Code tambahan dalam menggunakan propTypes
  ```js
  Button.propTypes = {
    // beberapa property yang dibutuhkan dalam button
    type: PropTypes.oneOf(["button", "link"]),
    onClick: PropTypes.func, // onClik akan berjalan dengan menggunakan function
    target: PropTypes.string,
    isPrimary: PropTypes.bool,
    href: PropTypes.string,
    isDisabled: PropTypes.bool, // klo misalnya link / button nya disable
    isLoading: PropTypes.bool, // klo dicklik muncul loading spinner
    isSmall: PropTypes.bool, // Ukuran small
    isLarge: PropTypes.bool,
    isLight: PropTypes.bool,
    isBlock: PropTypes.bool,
    isExternal: PropTypes.bool, // jika link nya  nnti akan mengarah ke luar aplikasi, tp klo cuman k dalam cukup pake Link
    hasShadow: PropTypes.bool, // utk button dg tampilan punya shadow
  };
  ```
  - implementasi smw proptypes dan render : buka file src > components > button > index.js

#### Mengupdate color variable di dalam scss

- Masuk ke dalam src > assets > scss

  - Open file "\_variable.scss"
  - kita bisa menyesuiakan warna primary dan secondry pada file ini
  - Open style.scss
  - Kita bisa menambahkan styling yang di custom. sbgiamana saya membuat className text-brand-logo, maka utk styling utk className ini bisa diletakkan dalam file ini.

    ```scss
    .brand-text-logo {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 26px;
      line-height: 42px;
      color: $primary;
    }
    ```

  - Open file \_text.scc pada folder utilites. Tambahkan code berikut ini :

    ```scss
    @each $color, $value in $grays {
      @include text-emphasis-variant(".text-gray-#{$color}", $value, true);
    }

    @each $color, $value in $colors {
      @include text-emphasis-variant(".text-color-#{$color}", $value, true);
    }
    ```

  - Tujuannya kita bisa menggunakanya dalam classsName, contoh :
    ```js
    <span className="text-color-orange">ine</span>
    ```

#### Membuat logo orderine

- Berhubung logonya hanya berupa tulisan, maaka saya bwt file IconText.js pada folder parts

  - code nya :

  ```js
  import React from "react";
  import Button from "components/button";
  export default function IconText() {
    return (
      <div>
        <Button className="brand-text-logo" href="" type="link">
          Order<span className="text-color-orange">ine</span>
        </Button>
      </div>
    );
  }
  ```

#### Membuat header

- Tambahkan comment berupa : /_ eslint-disable react/jsx-no-target-blank _/, untuk menghilangkan alert pada button > index.js bagian <a href> </a>
- import button dan IconText ke dalam Header.js, kemudian buat navbar sebagaimana dalam dokumentasi boostratp (saya menggunakan versi 4.xx).

  - Dalam file juga import (useState) untuk membuat state dengan tujuan agar kita bisa menggunakan toggle dalam tampilan non-desktop, dengan membuat arrow funct handleNavCollapse

    - Code state yang dibuat :

      ```js
      const [isNavCollapsed, setIsNavCollapsed] = useState(true);
      const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
      ```

  - selain itu buat arrow function getNavClass, yang akan mengarahkan ke children
  - Tambahkan onClick={handleNavCollapse} dan didalam className pada element li
  - Menu yang dibuat : Home, Product, dan About

- import react-router-dom dan LandingPage ke dalam App.js, untuk property yang digunakan didalam react-router-dom yaitu Router, dan Route
- Styling didalam assets > scss > style.css

  - code

    ```scss
    header {
      border-bottom: 1px solid $gray-200;
      width: 100%;
      position: relative;

      .navbar {
        height: 80px;

        ul.navbar-nav {
          margin: 5px 0 0 30px;
          li.nav-item {
            a {
              &.nav-link {
                color: $gray-900;
                padding-left: 1rem;
                padding-right: 1rem;
                &:hover {
                  text-decoration: underline;
                  color: $orange;
                  font-weight: bolder;
                }
              }
            }
          }
        }
      }
    }
    ```
