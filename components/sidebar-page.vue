<template>
    <nav id="sidebar" class="p-3" style="background-color: orange">
            <div class="sidebar-header">
                <h3>Menu</h3>
            </div>

    <ul id="accordionSidebar" class="navbar-nav text-light">
    
    <NuxtLink to="/homepage">
        <li class="nav-item"><a class="nav-link active"><i class="fas fa-tachometer-alt"></i><span>Home</span></a></li>
    </NuxtLink> 
    <NuxtLink to="/dashboard">
        <li class="nav-item"><a class="nav-link"><i class="fas fa-user"></i><span>Dashboard</span></a></li>
    </NuxtLink>
</ul>           
</nav>
</template>
