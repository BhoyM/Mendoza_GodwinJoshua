<template>
<body>
    <div class="container">
        <div class="card shadow-lg o-hidden border-0 my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-flex">
                      <div class="image">
                        <div class="imageoverlay">
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-7">
                      <div class="p-5">
                        <div class="text-center">
                          <img class="rounded-sm" src="avatar1.png" width="100px" height="100px">
                        </div>
                        <h4 class="text-dark mb-4 mt">LOGIN</h4>
                        <form class="user">
                          <div class="mb-3">
                            <input class="form-control form-control-user" v-model="Email" id="Email" type="email" placeholder="Email Address/Username" name="email" />
                          </div>
                          <div class="mb-1">
                            <input class="form-control form-control-user"  v-model="Password" id="Password" type="password" placeholder="Password" name="password" />
                          </div>
                          <div class="mb-3">
                            <div class="text-right">
                              <a class="small">Forgot Password?</a>
                            </div>
                          </div>
                          <div class="d-grid gap-2 col-6 mx-auto">
                          <NuxtLink to="/homepage"  id="Login" class="btn btn-outline-danger d-block btn-user mb-3 w-100" type="submit">Login</NuxtLink>
                          </div>
                          <hr>
                          <div class="text-center">
                            <NuxtLink to="/register">No Account? Register here</NuxtLink>
                          </div>
                        </form>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      Username: "",
      Password: ""
    }
  }
}
</script>
