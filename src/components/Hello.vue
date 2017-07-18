<template>
  <div class="hello container-fluid" >
    <div class="space-out">
    </div>
      <img src="../assets/fiatcoin.png">
      <h2 class="center-text">
      From the blockchain to your hand
      </h2>
      <div class="signup">
        <div id="mc_embed_signup" >
          <form
            action="//fiatcoin.us16.list-manage.com/subscribe/post?u=36a8cc33584fa4d432186c697&amp;id=503a29a06c"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate>
          <input
            placeholder="Enter your email"
            type="email"
            value=""
            name="EMAIL"
            class="required email"
            id="mce-EMAIL">
          <span id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none">
            </div>
            <div class="response" id="mce-success-response" style="display:none">
            </div>
          </span>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <span style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_36a8cc33584fa4d432186c697_503a29a06c"
              tabindex="-1"
              value="">
          </span>
          <span class="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button">
          </span>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
mc_embed_signup
{
  background:#fff;
  clear:left;
  font:14px Helvetica,Arial,sans-serif; 
}

h1, h2 {
  font-weight: normal;
}

.space-out {
    min-height: 30vh;
}

.center-text {
  color: white;
}

.container-fluid {
    height: 100vh;
    padding-right:0;
    padding-left:0;
    margin-right:auto;
    margin-left:auto;
    background-image: linear-gradient(35deg, rgb(153, 197, 255), rgb(0, 66, 153));
}

input[type=email] {
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  width: 20%;
  min-width: 300px;
  border: 0 none;
}

input[type=email]::placeholder {
  color: #ccc;
}

input[type=submit] {
  padding: 5px 25px;
  margin: 20px;
  background: rgb(38, 189, 225);
  color: white;
  border: 0 none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 20px;
}
input[type=submit]:hover {
  background: rgb(7, 54, 79);
}


ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
