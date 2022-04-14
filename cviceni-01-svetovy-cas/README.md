# Cvičení 1 - Světový čas

V tomto cvičení si procvičíš useEffect pro spouštění funkce při první vykreslení komponenty a také použití API pro zjištění aktuálního času.

## Pražský čas

1. Založte si novou React aplikaci podle klasického postupu pomocí `create-czechitas-app`.

2. Vytvoř komponentu `WorldTime` a umísti ji do `App`. Uvnitř komponenty vytvoř jednoduchý efekt, který se spustí pouze pří prvním zobrazení komponenty. Uvnitř tohoto efektu zavolej funkci `alert`, která zobrazí vyskakovcí okno s nějakou zprávou. Funkci `alert` hned vzápětí zase odstraníme, ale zkus si aplikaci spustit, abys viděla, zda efekt správně funguje a zpráva se objeví.

3. Přidej do komponenty stav `datetime`, jehož výchozí hodnota bude prázdný řetězec. V efektu smaž volání funkce `alert` a místo toho ulož do stavu nějaký čas jako řetězec ve formátu `'2020-11-13T22:46'`

4. Zobraz tento čas někde na stránce a vyzkoušej, že efekt správně nastaví hodnotu stavu při prvním zobrazení komponenty.

5. Uprav efekt tak, aby pomocí volání `fetch` získal aktuální datum a čas pro časovou zónu `Europe/Prague`. Aktuální datum a čas získáš na API endpointu:
	```
	https://worldtimeapi.org/api/timezone/Europe/Prague
	```

	Ve vrácených datech bude položka `datetime`. Získanou hodnotu ulož do stavu a vyzkoušej, že aplikace funguje.


## Výběr časové zóny

6. Vlož do stránky formulář, ze kterého si uživatel může vybrat časovou zónu. Uvnitř formuláře použij následující select.

	```jsx
	<select>
		<option value="America/New_York">New York</option>
		<option value="Europe/London">Londýn</option>
		<option value="Europe/Moscow">Moskva</option>
		<option value="Europe/Prague">Praha</option>
		<option value="Asia/Hong_Kong">Hong Kong</option>
		<option value="Asia/Jerusalem">Jeruzalém</option>
	</select>
	```

7. Vytvoř stav `timezone` a funkci `handleTimezoneChange`, která propojí tento stav s hodnotou uvnitř prvku select (obousměrný data binding). Jako výchozí hodnotu pro tento stav `timezone` zvol `Europe/Prague`.

8. Zařiď, aby se tvůj efekt volal při každé změně stavu `timezone`. Uvnitř efektu sestav URL pro dotaz na API tak, aby server poslal data pro uživatelem vybranou časovou zónu.

9. Tvoje aplikace by měla fungovat tak, že když uživatel vybere z nabídky časovou zónu, na stránce se mu ukáže aktuální čas v této zóně.
