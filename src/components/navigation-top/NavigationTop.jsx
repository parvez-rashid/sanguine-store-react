export default function NavigationTop() {
  return (
    <nav>
      <nav class="navigation">
        <div class="nav-logo">
          <a href="#"></a>SANGUINE store
        </div>
        <label for="search" class="text-size-sm">
          <input
            type="search"
            class="search-box padding-md border-rad-md"
            name="search"
            placeholder="What are you looking for?"
          />
          <a href="#" class="options text-dec-none text-wt-bold">
            Search
          </a>
        </label>
        <ul class="list-style-none list-inline">
          <li>
            <a
              class="options link text-wt-semibold border-rad-md padding-lg box-shadow"
              href="/login-page/index.html"
            >
              login/signup
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
