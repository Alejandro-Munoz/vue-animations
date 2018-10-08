<template>
    <div >
        <h2>Menu</h2>
        <br>
        <ul>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link to='/user'>User</router-link></li>
            <li><router-link to='/system'>System</router-link></li>
        </ul>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
div{
    width:40%;
    height: 200px;
    background:green;
    color:white;
    margin-right: 20px;
    padding: 20px;
}

a{
    color:white;
}
a:link, a:visited{
    text-decoration: none;
}

ul li{
    text-decoration: none;
    list-style-type: none;
    color:white;
}


</style>
