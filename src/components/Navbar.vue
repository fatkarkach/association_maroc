<template>
  <nav class="navbar navbar-expand-lg navbar-fixed-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"> <img src="~@/assets/images/assoc_logo.svg"></router-link>
      <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarCollapse1">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse1">
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link text-white"> Acceuil</router-link>
          <router-link to="/" class="nav-item nav-link text-white">À propos de nous</router-link>
          <router-link to="/" class="nav-item nav-link text-white">Services</router-link>
          <router-link to="/" class="nav-item nav-link text-white">Contact</router-link>
        </div>
        <form class="d-flex ms-auto">
          <input type="text" class="form-control me-sm-2 login" placeholder="Search">
          <button type="submit" class="btn btn-outline-light me-sm-2 login">Search</button>
          <router-link to="/Login"><button type="button" class="btn btn-light me-sm-2 w-login">Connecter </button></router-link>
          <router-link to="/Signup">  <button type="button" class="btn   btn-light me-sm-2 w-login btn-login">S'inscrire</button></router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: `Navbar`,
}
</script>

<style scoped>
nav{
  background: #24252a;
  color:white;
}

img {
  margin-left: 40px;
  width: 200px;
  margin-top: -23px;
}
.btn-login{
background-color: #FF0000;
  border-color: #FF0000;
  color: white;
}
.btn-login:hover{
  background-color: #FF0000;
}
.nav-link:hover {
  color: #FF0000!important;
  margin: 0 5px!important;
  transition: all .3s ease;
}
@media screen and (max-width:   300px) {
  .login{
    display: none;
  }
  .btn-login{
    margin-right: 20px;
  }
  .d-flex {
    display: flex!important;
    flex-direction: column;
    align-items: center;
  }
  .btn-login{
    margin-top: 20px;
    margin-left: 20px;
  }
  a{
    text-align: center;
  }
}
nav{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
</style>