<script>
    import {Link} from 'svelte-routing';
</script>

<nav>
    <Link to="/">
        SVELTE APP
    </Link>
    <Link to="/">
        Heroes
    </Link>
</nav>

<style>
  .logo {
    width: 10rem;
    height: auto;
    margin: 1rem 2rem 1rem 1rem;
  }
  .nav-divider {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .nav {
    display: flex;
    align-items: center;
  }
</style>