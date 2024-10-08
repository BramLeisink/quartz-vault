*Overgenomen uit: [Math4all: Rijen met de TI-83/84](https://info.math4all.nl/TI/TI83rijen.html)*
## Rijen met directe formules

Rijen met **directe formules** kunnen op drie manieren worden ingevoerd. Ga uit van de rij met voorschrift:
$$u_{n} = 800 \cdot (1.05)^{n - 1}$$
te beginnen met $n = 1$.

Je kunt de **rij als een gewone functie** opvatten met als domein alleen de getallen $0, 1, 2, 3, 4, \dots$.

- Voer het functievoorschrift in: `Y1=800*(1.05)^(X-1)`
- Stel de TABLE-routine zo in, dat de tabel start bij $X = 0$ of $X = 1$ en dat de stapgrootte 1 is (gebruik `TBLSET`)
- Bij TABLE, dus `[2nd] [GRAPH]` vind je nu de termen van de rij
- Bij GRAPH vind je de grafiek van deze rij, helaas als doorgetrokken grafiek

Je kunt eenvoudig de bijbehorende **verschilrij** in beeld brengen via: `Y2=Y1(X+1)-Y1(X)`.  
Je vindt `Y1` door te toetsen `[VARS]` en te kiezen `Y-VARS` en `1: Function [ENTER] 1: Y1 [ENTER]`.

Je kunt de bijbehorende **somrij** maken via: `Y3=sum(seq(Y1,X,0,X))`.  
Je vindt hierin:

- `sum` door te toetsen `[2nd][STAT]` en te kiezen: `MATH 5: sum( [ENTER]`
- `seq` door te toetsen `[2nd][STAT]` en te kiezen: `OPS 5: seq( [ENTER]`
- De komma als een afzonderlijke toets `[ , ]`

Je kunt de **rij als een lijst met getallen** opvatten. Je kunt hem dan invoeren in de lijsten L1, L2, enz. Dat gaat zo:

- Toets `[STAT]` en kies `1: Edit...`. Je ziet nu een aantal lijsten `L1, L2, enz.`
- Voer in `L1` de nummers van de termen (hier bijvoorbeeld: 1, 2, 3, 4, ..., 20) in door de cursor op `L1` te zetten en `[ENTER]` te toetsen. Onderaan zie je nu `L1=` met daarachter de cursor.
- Ga naar `[2nd][STAT]` en kies `OPS 5: seq [ENTER]`. Je ziet nu: `L1=seq(` met daarachter de cursor.
- Zet daar in: `X [ , ] X [ , ] 1 [ , ] 20 [ ) ]` en toets `[ENTER]`. In `L1` staan nu de getallen 1 t/m 20. Ga dat na door met de pijltjestoetsen door de lijst te lopen.
- Voer in `L2` de termen zelf in door de cursor op `L2` te zetten en `[ENTER]` te toetsen. Onderaan zie je nu `L2=` met daarachter de cursor. Ga naar `[2nd][STAT]` en kies `OPS 5: seq [ENTER]`. Je ziet nu: `L2=seq(` met daarachter de cursor. Zet daar in: `800*(1.05)^(X-1) [ , ] X [ , ] 1 [ , ] 20 [ ) ]` en toets `[ENTER]`. In `L2` komen nu de termen van de rij.

De bijbehorende **verschilrij** kan nu in `L3` door: `L3=DList(L1)` in te voeren onder `L3`. Je vindt hierin:

- `DList(` door te toetsen `[2nd][STAT]` en te kiezen: `OPS 7: DList( [ENTER]`
- `L1` door te toetsen `[2nd][1]`

De bijbehorende **somrij** kan nu in `L4` door: `L4=cumSum(L1)` in te voeren onder `L4`. Je vindt hierin: `cumSum(` door te toetsen `[2nd][STAT]` en te kiezen: `OPS 6: cumSum( [ENTER]`.

Je kunt tenslotte **de rij invoeren in de Seq-mode** (sequence = rij). Je toetst daartoe `[MODE]` en kiest `Seq` (dat staat achteraan op de vierde rij) en dan `[ENTER]`. Als je nu `[ Y= ]` toetst, dan zie je het venster linksonder.

![](https://info.math4all.nl/TI/im83/83rij2.gif) ![](https://info.math4all.nl/TI/im83/83rij3.gif)

Achter $u(n)$ voer je vervolgens het voorschrift van de rij in:  
$u(n)=800 \cdot (1.05)^{n-1}$  
De $n$ vind je op dezelfde toets als de variabele $X$ bij functies. Achter $u(n_{\text{Min}})$ voer je de term in die hoort bij de laagste waarde van $n$, dus 800. Je ziet dan het venster rechtsboven.

Je kunt nu op de 'gewone' manier gebruik maken van `GRAPH`, `TABLE`, `TBLSET`, `WINDOW` en `TRACE`. Loop die toetsen nog even na om te kijken wat er in de Seq-mode mee gebeurt. Let wel op, dat je even bij `FORMAT` kijkt of daar wel `Time` is ingesteld, want anders krijg je een heel ander soort grafiek dan je gewend bent (daarover later meer).

Maak een grafiek van de rij waarbij $n$ loopt van 1 t/m 20.  
Oefen het werken met rijen gegeven door een directe formule.

## Recursief gegeven rijen

Als je een rij die gegeven is door een **recursieformule** wilt invoeren, moet je de TI83 eerst laten werken in de Seq-mode (sequence = rij). Je toetst daartoe `[MODE]` en je loopt met de cursor naar `Seq` en toetst `[ENTER]`.

Bekijk nog eens de rij met direct voorschrift:

$$u_n = 800 \cdot (1.05)^{n - 1}$$

In recursieve vorm ziet diezelfde rij er zo uit:

![](https://info.math4all.nl/TI/im83/83rij4.gif)

In de Seq-mode is de rij ook als recursieformule in te voeren. Lastig is wel dat de TI83 het rij-scherm begint met  
`u(n)=`, in plaats van `u(n+1)=`.  
Je moet daarom eerst het recursievoorschrift aanpassen tot:

![](https://info.math4all.nl/TI/im83/83rij5.gif)

Daarna kun je hem eenvoudig invoeren op dezelfde manier als beschreven in **de rij invoeren in de Seq-mode**.  
De `u` vind je als `[2nd] [7]`.

Ook nu kun je op de 'gewone' manier gebruik maken van `GRAPH`, `TABLE`, `TBLSET`, `WINDOW` en `TRACE`. Loop die toetsen nog even na om te kijken wat er in de Seq-mode mee gebeurt. Let wel op dat je even bij `FORMAT` kijkt of daar wel `Time` is ingesteld, want anders krijg je een heel ander soort grafiek dan je gewend bent (daarover later meer).

![](https://info.math4all.nl/TI/im83/83rij1.gif) Maak een grafiek van de rij waarbij $n$ loopt van 1 t/m 20. Oefen het werken met rijen gegeven door een recursieformule. Hier zie je hoe de rij van Fibonacci kan worden ingevoerd.

## Tijdgrafiek en webgrafiek

Je kunt bij rijen twee soorten grafieken maken:

- 'gewone' grafieken of tijdgrafieken
- webgrafieken

De bijbehorende instelling `Time` of `Web` vind je onder `FORMAT` als de rekenmachine in de Seq-mode staat.

Gebruik weer dezelfde rij als in de rest van het practicum met directe formule:

$$u_n = 800 \cdot (1.05)^{n - 1}$$

en recursieformule:

![](https://info.math4all.nl/TI/im83/83rij5.gif)

De **tijdgrafiek** verschijnt netjes in beeld als de formule is ingevoerd en de juiste scherminstellingen ($n$ loopt van 1 t/m 20 en $u(n)$ loopt van ongeveer 0 tot 2000) en tabelinstellingen zijn gekozen. Je ziet dan:

![](https://info.math4all.nl/TI/im83/83rij6.gif) ![](https://info.math4all.nl/TI/im83/83rij7.gif) ![](https://info.math4all.nl/TI/im83/83rij8.gif) ![](https://info.math4all.nl/TI/im83/83rij9.gif)

De **webgrafiek** verschijnt in stappen in beeld.

- Eerst kies je bij `FORMAT` de instelling `Web`.
- Vervolgens pas je het venster zo aan, dat zowel in de $x$-richting als in de $y$-richting rijtermen (lopend van 800 naar 10000 en nog groter) op het scherm passen.
- Met `[GRAPH]` zie je twee lijnen in beeld komen. Eén daarvan is de lijn $y = x$. De ander wordt bepaald door de rij (de bijbehorende theorie vind je in je wiskundeboek).
- Je toetst `[TRACE]` en met de pijltjestoetsen vind je nu telkens twee opeenvolgende termen van de rij, te weten $x = u(n - 1)$ en $y = u(n)$. In de grafiek zie je (hoewel dat in dit voorbeeld niet erg duidelijk is in het begin) de cursor springen van de lijn $y = x$ naar de lijn die door de rij wordt bepaald en weer terug, en zo maar steeds door.

Nu zie je:

![](https://info.math4all.nl/TI/im83/83rij6.gif) ![](https://info.math4all.nl/TI/im83/83rij10.gif) ![](https://info.math4all.nl/TI/im83/83rij11.gif) ![](https://info.math4all.nl/TI/im83/83rij12.gif)

## Stelsels rijen en fasegrafieken

Er ontstaan stelsels rijen als je bijvoorbeeld te maken hebt met een migratiematrix, met de prooi-roofdier-cyclus, of bepaalde economische modellen. Een voorbeeld van zo'n stelsel is (de bijpassende migratiegraaf staat ernaast):

![](https://info.math4all.nl/TI/im83/Migratiegraaf.gif)

$$
u_n = 0.8 \cdot u_{n - 1} + 0.4 \cdot v_{n - 1}
$$
$$
v_n = 0.2 \cdot u_{n - 1} + 0.6 \cdot v_{n - 1}
$$
met  
$u(0) = 80$ en $v(0) = 20$.

Na instellen van de Seq-mode kun je dit stelsel in het `Y=`-venster invoeren, het venster instellen (denk erom dat in de $y$-richting de waarden van de rijen komen, dus je kunt beter eerst de tabel bekijken) en de bijpassende tijdgrafieken maken.

![](https://info.math4all.nl/TI/im83/83rij13.gif) ![](https://info.math4all.nl/TI/im83/83rij13S.gif) ![](https://info.math4all.nl/TI/im83/83rij15.gif) ![](https://info.math4all.nl/TI/im83/83rij14.gif)

Juist bij stelsels rijen is het vaak nuttig om een zogenaamde **fasegrafiek** te maken, waarin de rij $u(n)$ op de horizontale as en de rij $v(n)$ op de verticale as is uitgezet.  
Je kiest dan via `[2nd][ZOOM]` voor het `FORMAT`-menu. Daarin kun je naast `Time` en `Web` ook kiezen voor `uv`.  
Je krijgt dan zo'n fasegrafiek. Hier wordt hij niet erg spectaculair, want er ontstaat als snel een stabiele situatie; ga zelf maar na.

![](https://info.math4all.nl/TI/im83/83rij16.gif) ![](https://info.math4all.nl/TI/im83/83rij17.gif)

Veel leuker is het om dit te doen bij een geschikt prooi-roofdier-model...
