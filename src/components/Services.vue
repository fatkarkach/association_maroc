<template>
  <section class="section-services">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-10 col-lg-8">
          <div class="header-section">
            <h2 class="title">Nos <span>Services</span></h2>
            <p class="description">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour</p>
          </div>
        </div>
      </div>
    </div>
    <!-- The HTML5 video element that will create the background video on the header -->
    <div class="card-deck">
    <div class="service service2">
      <FAIFatma   :icon="['fas' ,'calendar-days']" class="icon alt" />
      <h4>Gestion des activités</h4>
      <p>Gérez des événements complexes avec différents types de tickets et des participants externes</p>
    </div>
        <div class="service service2">
          <FAIFatma   :icon="['fas' ,'box']" class="icon alt" />
          <h4>Gestion des dons</h4>
          <p>Compter l’obtention de dons susceptibles de pouvoir vous assurer un volant financier confortable dans la conduite de vos projets..</p>

        </div>

        <div class="service service2">
          <FAIFatma   :icon="['fas' ,'users']" class="icon alt" />
          <h4>Gestion des adhésions</h4>
          <p>Le platforme  sera une  clé d’un traitement rapide et efficace des données de tous vos membres, et donc un gain de temps non négligeable.</p>
        </div>
    </div>

  </section>
</template>

<script>
export default {
name: `Services`
}
</script>

<style scoped>
.section-services {
  padding-top: 110px;
  padding-bottom: 120px;
  color: black;

}

.section-services .header-section {
  margin-bottom: 35px;
}

.section-services .header-section .title {
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 25px;
  text-transform: uppercase;
  font-weight: 700;
}

.section-services .header-section .title:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 1px;
  background-color: #FF0000;
}

.section-services .header-section .title:after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 45px;
  height: 3px;
  background-color: #FF0000;
}

.section-services .header-section .title span {
  color: #FF0000;
}
.section-services {
  padding: 40px 40px 25px;
}

.section-services .single-service .part-1 .title {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.8em;
}

.section-services{
  padding: 30px 40px 40px;
}
.section-services .single-service .part-2 a {
  color: black;
  font-size: 14px;
  text-decoration: none;
}
h2.title {
  color: black;
}
.section-services .header-section {
  color: black;
}
h2.title {
  margin-top: 40px;
}
/* Media Query for devices withi coarse pointers and no hover functionality */
p {
  font-size: 0.9rem;
  margin: 1rem 0;
  line-height: 1.5;
}

section {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
}

.service {
  background: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  -webkit-box-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #e7e7e7;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.service:hover {
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
}

.service2:hover {
  border: 2px solid red;
}
svg {
  font-size: 3.45em;
  margin-bottom: 25px;
}
.service .cta span {
  font-size: 0.6rem;
}

.service > * {
  flex: 1 1 100%;
}
.card-deck{
  display: flex;
  flex-wrap: wrap;
}
h4{
  font-size: 1em;
}
</style>