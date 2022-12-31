const CONFIG = require("../config.json");
const captcha = require("2captcha");
const solver = new captcha.Solver(CONFIG.twocaptcha)
const gradient = require("gradient-string");

module.exports = function() {
    this.solveCaptcha = function() {
        console.log(gradient.pastel("[+] Solving captcha..."));
        solver.hcaptcha(CONFIG.captchasitekey, "https://discord.com/api/v9/auth/register").then((res) => {
            /* 
            DEBUG 
            OK This broken idk gotta fix later
            Example response looks like this:
            {
                data: 'P1_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.hKdwYXNza2V5xQb7pcg-e34jn6kYIUb_U1piDqV5j7rLCnrZq6bOwm_i_yvxJrPsCSqA9Vu9tVT2VYICggBGhyimh8j5vAolQ7sLV-7jZJlplzFn6wc2sEfRHgEAVDABCZBj6c11q70xZasfXRXkZ06ktGK4V3z8304IjpfeubU4fnBIXE9KYUrNZELPKfoil7R1uY04eSuBWNdJxt7k6rvGAGCVmhFc8MyhJxNH0afXSSLB-k1UHOTLlRk7kppQ5Yvk43_kaX8RVYuUi_IhAsZ6JtkNtKCq_wZHu8_HUwwHRp86UyIF3uyr_cqhwRzOjqnr_OYQ-J1ObUacgMD21HZ326B4JyJ-kcdpKjQYbi_yotnZVpl_pY2eJw-HSKp_56sAAkOeIBs48SCZf_oW4KH36FXAlOrYGB6X5JD9gRRut04eqyiSWXTZ1kALK9Mqd-4Zj3V6tWDFhthkgZGfY1dLaQsnCvdUYbgQcAUM96pisAqYIO4n3Op_XLqydGIQ3zVebBWSuorz-Q9gxnyoRA1m6vm8MqgJyq2LJE5v11HQH4bQrExukHU-2NRupXgxq0jpV7Bjr4DdqpO1h2d1B8-s94vTCWzcIp7lu1JdMlWAroOYMj3OG2iMFslDKS3mn0aCBxLnYVjHGRfMwd1e3jV10LIqYlRTKRUvLt5ZF3KDfJj3y1XaVT7L2UmYbKQ6I5zxe7S6RctrfihfpVeqZK_ZeO6VanbHxJgOwsRNBHCmH7xNjX6_tXnUwLy_sfgb2dyEUlWosXrXAQjlc9Xl0JUpNVYCsnFnBkqcqqLbrlpNdkCC7MqBHLDMjpB6Ywkbgdt9DUuQ-CMjOAY3MqhT9jG34cD7tNaeOcllChFiAT8AL0OQ1s95DkbyWu9ln1I5wyCjigJTOtLObrhQin8sFdTnzEGzSI9gb33kxPSE3RLLpy13mouOQjCGdYQk9Le9-uX4mmuDKLDZwaZtMg1SOgihffWjcBSDUWSiqh89YUZsPxx_jOS-2e0QNUu2q-2Wcsu9x9y2G7KBXxW5cGIXm0LbXJLD3g3_l61JHamJOkTIjoDbptmnOxEoo2v8vaNuTs2vrnGOtmOhb_YCaVpW9Fsd9d-VhaknmFMuj2vtQJt4yX0Pb7OGA_XDqal3eaDPr6J25YgD4YnW8GwKNeUhGorcGgImTz21fojiekvArTH_uXKWIuSjr5UFELfKZLLUDvSQR_T5Fs0Y6xTE1hphbcO_aHQ-DG7AAJHCWgixvLQG-S5bkTy0GyQEU6twmbR22su_KUvgQGzEyfQKnQBaIq93_CYaFlbYbhLGSuaAFcvJwyqVezkoQcegRdD_EFfgMIqyiWf16T9ftd838KcIa5-oHyF3t24xWhuW_5RyoahUHxxm9surt0Wp4lZMD5siM8tR57hlCOyG3lFTTQHcCu5ReiBd3bo1VFAkbW-jTxK3Dhwhnj3RJses3USivHlRb7NWtdkVJSpWPHu7hjxclQLg0BN3c_LHebg3H27nVcp5hzhIpnPJy6MdndYibYtsOmIUfZViDmwIB8Hvz9NNdd2ruAQswBWTZpVY43CsbDW3wQcqwosEQOzQVaFlrfDSMy0WepK43t6dGsS95z-lHhZVn4GjqFZYfZsbN6NzEmoqgP1fPOGlm8Cqb60mj5HcMqmKM_JIw0vKqd1yWH1_pAxTkSCEEhO76T9jvZaGpi6wWHbyVLYgiahm88LKB8l0ed5XNCH_JZxvtoPK0k9NUfe1ZmoC_7_i-ord1sh81Ueo4nOFV0ZyoZc37SjBIJxp8ibggJQQVbhr8yJw68R85tUw-TF4b9XknPHuqjOiaRhZ5No-8L-6ksyhgZWPxMyCcVcq3Ji1q1yW1CzsnyZFSCqAGsqrD8ORxHWsDaQqfqz21_DxeIT-SGitmfvPt2FmBudHy3P5E_X29_tjFWBuDHdbGWyB3jKvhcNGfKNpYsREVohOVub_8tsoez76lIM2UHpFAmHJgNcE1-pQP9yhIKJvY9cCPxn9Iv_UnjicM_dc4dti26sLwJpSRs0C5chtoigeSowVEfJq4f8up9ZeCioET5L-oeoRqd8XHaEfKCPh8GoxUy8PJHbcGGfRpLGCz6A4PBF1f4PqI4lJFO470BE3TOtqMHFQr72Qh_EITLuD2gsEHhjSf3PC3_wXbS7r0JZ4eubtfFndH4vxwAZFZTiAA374Ymd2kgN0QiCHE2c4kEa2f-xLZIXh9yEbV-npYKmi4QLp6qDjRtMc0LrDsa1h_kefDiQZbCYRLHKC0PDig3n3UoYPP7THAQJvMIAyysQrrSuADOMVKsIv7OhXuFWZTnaObrnfOhbG5cK78fKM7v1iL9cOKGWb2GdFOCWU2ayYW8GUbns3H_a5Ctq6CQO8qq2xcXWjZXhwzmOvfheoc2hhcmRfaWTOAzGDb6JwZAA.myvEQcwsOH4eQq6UlefQpRenjYwKv8Ys5pnjPAHQ5Ug',
                id: '72451133762'
            }
            "data" is the solved key, and no clue what "id" is.
            So you grab "data" and put it alongside the credentials to register.
            */ 
           console.log(res)
        })
    }
}