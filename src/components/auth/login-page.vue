<template>
    <div class="login-page-wrap">
        <div class="login-page-container">
            <!-- <div class="login-page-content">
                <h1>登录</h1>
                <form action="">
                    <div class="form-item">
                        <label for="">用户名</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div class="form-item">
                        <label for="">密码</label>
                        <input type="password" name="" id="" />
                    </div>
                    <div class="form-item">
                        <button type="submit">登录</button>
                    </div>
                </form>
            </div> -->
            <div class="form" id="loginform">
                <div class="title">Login</div>
                <form novalidate>
                    <p class="email">
                        <label for="email">Email login <span>*</span> </label>
                        <input
                            class="input"
                            required
                            type="email"
                            id="email"
                            name="email"
                            pattern="@"
                        />
                        <span class="validation error"> Please enter a valid email</span>
                        <span class="validation req"> This field is required</span>
                    </p>
                    <p class="password">
                        <label for="password">Password <span>*</span></label>
                        <input
                            class="input"
                            required
                            type="password"
                            id="password"
                            name="password"
                        />
                        <span class="validation req"> This field is required</span>
                    </p>
                    <p class="login">
                        <input type="submit" value="Login" @click="userLogin()" />
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const userLogin = () => {
    console.log(1111)
    router.push({
        path: '/questions-list',
    })
}
</script>

<style>
.login-page-wrap {
    height: 100%;
    background: linear-gradient(to bottom left, #89cbc9 50%, #72b6b6 50%);
}
.login-page-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-page-content {
    width: 600px;
    height: 700px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 10px;
}

/****** 2. Let's shake this form  ******/

/* Creating the animation */
@keyframes shakeMe {
    0%,
    100% {
        transform: translateX(0);
    }
    20%,
    60% {
        transform: translateX(-10px);
    }
    40%,
    80% {
        transform: translateX(10px);
    }
}

/* Applying the animation */
.errors {
    animation-name: shakeMe;
    animation-duration: 0.5s;
}

/****** Here come the unicorns, aka all the styling not useful for the animation demo at the conference :)  ******/

.form {
    background: #fff;
    border: 1px solid #d9d9d9;
    color: rgb(99, 99, 99);
    width: 300px;
    border-radius: 4px;
    margin: 0 auto;
    padding: 20px 30px;
}
.title {
    font-size: 25px;
    text-align: center;
    margin: 0;
    padding: 10px 0px;
    border-bottom: 1px solid rgb(220, 220, 220);
}

form p {
    position: relative;
    margin: 25px 0 10px 0;
    position: relative;
}

.email label,
.password label,
.input {
    display: block;
    width: 100%;
    padding-bottom: 10px;
    box-sizing: border-box;
}

/* Submit button Styling */

[type='submit'] {
    display: block;
    color: #5a3b5d;
    font-weight: bold;
    border-radius: 2px;
    background: #89cbc9;
    box-shadow: 5px 5px 0 0 #89cbc9, inset 4px 4px 0 0 white;
    border: 2px solid #5a3b5d;
    border-radius: 3px;
    padding: 10px;
    width: 100%;
    margin: 0 auto;
    transition: background 0.3s;
    &:hover {
        background: white;
        box-shadow: 5px 5px 0 0 #72b6b6, inset 4px 4px 0 0 white;
    }
}

[type='password'],
[type='email'] {
    padding: 20px;
    &:focus {
        outline: none;
    }
}
/* Styling the input */

.input {
    font-size: 0.85em;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(220, 220, 220);
    height: 40px;
    transition: border-color 0.4s, box-shadow 1s;
}

.input:active,
.input:focus {
    border: 1px solid #5a3b5d;
    box-shadow: 4px 4px 0 #89cbc9;
}

/****** Validation messages ******/

.invalid {
    border-color: rgb(183, 0, 76);
}

.required {
    border-color: #b54300;
}

.validation {
    display: block;
    font-size: 0.8em;
    padding-top: 0.5em;
    position: absolute;
    right: 0;
    opacity: 0;
    transition: opacity 1s;
}

.validation.req {
    color: #b54300;
}

.validation.error {
    color: rgb(183, 0, 76);
}

.invalid:not(.required) ~ .validation.error {
    opacity: 1;
    transform: scale(1);
}

.required ~ .validation.req {
    opacity: 1;
    transform: scale(1);
}
</style>