# React - lekce 9

Tento repozitář obsahuje podklady a cvičení pro 9. lekci kurzu React od Czechitas.

V této lekci:
- [Opakování Fetch a Promise](#opakování-fetch-a-promise)
- [Efekty](#efekty)
- [Efekty a volání API](#efekty-a-volání-api)
- [Cvičení na efekty a volání API](#cvičení-na-efekty-a-volání-api)

---

## Opakování Fetch a Promise

Pro získání dat ze serveru používáme javascriptovou funkci `fetch`, které jako parametr předáme adresu, odkud chceme data načíst.

```js
fetch('https://adresa.serveru.cz/data-jsou-tady')
```

Internetová komunikace může probíhat velmi nestálou rychlostí, připojení může vypadnout, server po cestě může mít závadu. Nikdy přesně nevíme, kdy nám skutečně dorazí data, o které jsme si serveru řekli. Kdyby JavaScript/prohlížeč na data čekal, naše aplikace by se mezitím "zasekla". Proto je `fetch` tzv. **asynchronní**. Funkce `fetch` proběhne okamžitě, ale nevrátí přímo data. Vrátí tzv. `promise` - příslib, že nám dá vědět, až skutečná data dorazí. Více o promise např. [zde](https://javascript.info/promise-basics).

Na splněnou promise (tj. data dorazila) lze reagovat pomocí `.then()`, která jako parametr přijímá funkci, která se spustí ve chvíli, kdy je promise splněná (fullfilled). Funkce `fetch` vrátí objekt, který představuje odpověď serveru na náš dotaz. Není to vždy podmínkou, ale my budeme pracovat jen s API, která vrací data ve formátu JSON. Z objektu, který nám vrátil `fetch` si je musíme vyextrahovat pomocí metody `response.json()`. Tato metoda vrátí další promise, na kterou opět můžeme reagovat pomocí dalšího `.then()`. Funkce uvnitř dostane jako parametr vyextrahovaná data převedená na javascriptový objekt nebo pole.

```js
fetch('https://adresa.serveru.cz/data-jsou-tady')
.then(response => response.json())
.then(data => {
	// tady něco provedeme s proměnnou data, ve které je to,
	// co nám server poslal jako odpověď na náš dotaz
	console.table(data);
})
.catch(error => {
	// pokud došlo k chybě, zde se podle toho můžeme zařídit
	console.error('CHYBA: ' + error);
})
```

## Efekty

V mírně komplikovanějších React aplikacích brzy narazíme na potřebu zareagovat na určité situace, které nastávají během vykreslování (renderování) komponenty. Budeme chtít například spustit nějaký kód ve chvíli, kdy se komponenta poprvé objeví na stránce. Čas od času také budeme chtít v komponentě provést něco ve chvíli, kdy se změní hodnota v props nebo ve stavu. K tomuto nám v Reactu slouží takzvané efekty.

Efekty jsou v podstatě velmi podobné událostem. Ve chvíli, kdy uvnitř komponenty něco nastane, budeme chtít yavolat naši funkci. Jako příklad si vyrobíme jednoduchou aplikaci, která řiká, kdo má zrovna svátek.

```jsx
const Svatek = () => {
  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má Alena</div>
    </>
  );
};
```

My budeme chtít, aby ve chvíli, kdy se naše komponenta objeví na stránce, se spustil kód, který např. z nějakého serveru zjistí, kdo má dnes svátek.

Použijeme funkci Reactu nazvanou `useEffect`, do které jako parametr předáme funkci, která se má spustit. Jako druhý parametr prozatím uvedeme prázdné pole `[]`. Nesmíme zapomenout funkci `useEffect` naimportovat.


```jsx
import React, { useEffect } from 'react';

const Svatek = () => {

	useEffect(
		() => console.log('jsem tady'),
		[]
	);

  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má Alena</div>
    </>
  );
};
```
Funkce `useEffect` má dva parametry. Prvním je funkce, která se má zavolat a druhý parametr říká, za jakých okolností se má naše funkce volat. Prázdné pole `[]` znamená, že se efekt spustí pouze ve chvíli, kdy se komponenta **poprvé objeví na stránce**.

Do pole můžeme také uvést názvy stavu nebo props. Efekt se pak spustí ve chvíli, kdy se hodnota daného stavu nebo prop změní.

## Efekty a volání API

Pokud chceme v naší aplikaci zobrazovat data z nějakého API, musíme si tato data stáhnout pomocí standardní javascriptové funkce `fetch`. Tuto funkci je nejlepší zavolat právě ve chvíli, kdy se naše komponenta poprvé objeví na stránce.

Naše poslední aplikace zatím zobrazovala, že svátek má Alena. To je však pravda pouze jeden den v roce. Pojďme aplikace vylepšit tak, aby si stáhla aktuální jméno ze serverového API.

```jsx
import React, { useState, useEffect } from 'react';

const Svatek = () => {
  const [name, setName] = useState('');

  useEffect(
		() => {
    	fetch('https://svatky.adresa.info/json')
			.then((response) => response.json())
			.then((json) => setName(json[0].name))
		},
		[]
	);

  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má {name}</div>
    </>
  );
};
```

Na dokumentaci použitého API se můžeš podívat [tady](https://svatky.adresa.info/).

V tomto případě jsme si do stavu ukládali pouze obyčejný řetězec se jménem. Naše data však budou často zobrazovat seznamy, takže budeme chtít mít ve stavu uložené nějaké pole.

Např. seznam časových zón, získaných z následující adresy:
```
https://worldtimeapi.org/api/timezone
```

## Cvičení na efekty a volání API

- [Cvičení 1 - Světový čas](./cviceni-01-svetovy-cas/README.md)
