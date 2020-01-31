<script>
	import {Router, Route} from 'svelte-routing';
	import Heroes from './heroes/pages/Heroes.svelte';
	import HeroDetail from './heroes/pages/HeroDetail.svelte';
</script>

<Router url="" >
	<!-- TODO: NavBar -->
	<Route path="/" component={Heroes} />
	<Route path="hero-detail/:id" let:params >
		<HeroDetail id="{params.id}" />
	</Route>
</Router>
