---
aliases: 
authors:
  - Bram Leisink
tags:
  - samenvatting
  - wisd
---
Discrete dynamische modellen worden ook wel systemen genoemd. Ze ontwikkelen zich in de loop van de tijd. Er spelen verschillende variabelen een rol, die elkaar beïnvloeden.

> Bij een discreet dynamisch model is er sprake van een vaste functie $F$:
> - *De volgende waarde vind je door de functie $F$ op de huidige waarde toe te passen*
> - Met andere woorden: $\text{waarde} \rightarrow F \rightarrow \text{nieuwe waarde}$
> - En dit herhaalt zich steeds: $\ldots u_{n-2} \rightarrow F \rightarrow u_{n-1} \rightarrow F \rightarrow u_n \rightarrow F \rightarrow u_{n+1} \rightarrow \ldots$
> - $F$ heet een **iteratiefunctie**.

## Notatie van een rij
$u = u_0, u_1, u_2,\cdots, u_n$
- **Startterm**: eerste term in de rij
- **Geldigheid**: voor welke $n$ geldt de formule?
	- $n = 0,1,2, \cdots$
	- $n \in \mathbb{N}$
	- $N \geq 0$
### Soorten formules
- **Recursieve formule**
	- Bereken nieuwe waarde op basis van vorige termen
	- Altijd **startterm** en **geldigheid**
	- $a_n = \begin{cases} a_{n-1} + n, & \text{voor } n \geq 1 \\ a_0 = 0 \end{cases}$
- **Directe formule**
	- Geeft direct de waarde
	- Geen **startterm** nodig
	- $a_n = \frac{n(n+1)}{2}$
## Type rijen
- **Rekenkundige rij**
	- Een vast verschil tussen de termen
	- Lineaire groei
- **Meetkundige rij**
	- Een vaste factor tussen de termen
	- Exponentieel
- **Kwadratische rij**
	- Geen vaste factor of vast verschil
## Speciale rijen
### **Verschilrij** ($V$)
- $V_n = a_n - a_{n+1} \quad (n = 1,2,3,\ldots)$
- Rij $a$ begint met rangnummer $0$, terwijl de verschilrij $V$ met rangnummer $1$ begint.
- Speciale gevallen
	- Verschilrij van een rekenkundige rij: constante rij
	- Verschilrij van een meetkundige rij: meetkundige rij met dezelfde reden
	- Verschilrij van een kwadratische rij: rekenkundige rij
### **Somrij** ($S$)
- Algemene stellingen
	- $S_0 = a_0$
	- $S_1 = a_0 + a_1$
	- $S_n = S_{n-1} + a_n$
	- $\displaystyle S_n = \sum_{n=0}^{n}a_n$
- Bij een rekenkundige rij
	- $S_n = \frac{1}{2}\cdot n\cdot (a_0 + a_n)$
	- $n\times$ het gemiddelde van de rij
- Bij een meetkundige rij ($c\cdot r^n$)
	- $S_{n} = \frac{c\cdot r^{n+1} - c}{r-1}$
	- $S_{n} = \frac{\text{volgende} - \text{eerste} }{\text{reden}-1}$
## Limieten
> Gegeven is een rij $u_n, n = 0,1,2,\ldots$
> Dan $\displaystyle \lim_{n \to \infty} u_n = L$, als de termen van de rij $u_n$ op den duur minder dan elk positie getal, hoe klein ook, van $L$ afwijken.
### Notatie
- De **limiet** van de rij $u_n$ (als $n$ nadert tot oneindig) is $L$.
- De rij $u_n$ **convergeert** naar $L$
- $\displaystyle \lim_{n \to \infty} u_n = L$
- $\forall \epsilon > 0, \exists N \in \mathbb{N} \, \forall n \geq N \, [|u_n - L| < \epsilon]$
- Als er een getal is waar naar toe de getallen in de rij naderen, dan heet de rij **convergent**.
- Als er geen getal is waar naar toe de getallen in de rij naderen:
	- $\displaystyle \lim_{n \to \infty} u_n = \infty$
	- $\displaystyle \lim_{n \to \infty} u_n = - \infty$
### Rekenregels voor limieten
Gegeven zijn twee convergente rijen $u$ en $v$. Dan is ook de rij
- $c \cdot u$ convergent en $\displaystyle \lim_{n \to \infty} (c\cdot u_n) = c \cdot \lim_{n \to \infty} u_n$;
- $u + v$ convergent en $\displaystyle \lim_{n \to \infty} (u_n + v_n) = \lim_{n \to \infty} u_n + \lim_{n \to \infty} v_n$;
- $u - v$ convergent en $\displaystyle \lim_{n \to \infty} (u_n - v_n) = \lim_{n \to \infty} u_n - \lim_{n \to \infty} v_n$;
- $u \cdot v$ convergent en $\displaystyle \lim_{n \to \infty} (u_n \cdot v_n) = \lim_{n \to \infty} u_n \cdot \lim_{n \to \infty} v_n$.
- $\displaystyle \lim_{n \to \infty} \left(\frac{u_n}{v_n}\right) = \frac{\lim_{n \to \infty} u_n}{\lim_{n \to \infty} v_n}, \quad \text{als } \lim_{n \to \infty} v_n \neq 0$.

Gegeven zijn twee rijen $u$ en $v$. De rij $v$ is convergent; de rij $u$ niet.
Gegeven is $\displaystyle \lim_{ n \to \infty } u_{n} = \infty$
- $\displaystyle \lim_{ n \to \infty } (c \cdot u )=\infty$ als $c >0$ en $\displaystyle\lim_{ n \to \infty }(c\cdot u_{n}) = - \infty$ als $c<0$;
- $\displaystyle \lim_{ n \to \infty }(u_{n}+v_{n}) = \infty$;
- $\displaystyle \lim_{ n \to \infty }(u_{n}-v_{n}) = \infty$;
- $\displaystyle \lim_{ n \to \infty }(u_{n}\cdot v_{n})=\infty$ als $\displaystyle \lim_{ n \to \infty }v_{n} > 0$ en $\displaystyle \lim_{ n \to \infty }(u_{n} \cdot v_{n}) = -\infty$ als $\displaystyle \lim_{ n \to \infty }v_{n}<0$;
- $\displaystyle\lim_{n \to \infty} \left(\frac{u_n}{v_n}\right) = \infty$ als $\displaystyle\lim_{n \to \infty} v_n > 0$ en $\displaystyle\lim_{n \to \infty} \left(\frac{u_n}{v_n}\right) = -\infty$ als  $\displaystyle\lim_{n \to \infty} v_n < 0$

Het vinden van $\displaystyle \lim_{ n \to \infty }\left( \frac{u_{n}}{v_{n}} \right)$ als $\displaystyle \lim_{ n \to \infty }u_{n} = \infty$ en $\displaystyle \lim_{ n \to \infty }v_{n} = \infty$ is lastig, maar het wordt eenvoudiger met deze rekenstap:
> Deel de teller en noemer door een geschikt getal: vaak een geschikte macht, bij voorkeur noemer niet nul makend.

> [!example]- Voorbeelden
> $\displaystyle \lim_{ n \to \infty } \frac{8n^3+5n^2}{4n^3 + n + 7} = \lim_{ n \to \infty } \frac{8+5n^{-1}}{4 + n^{-2}+7n^{-3}} = \frac{8+0}{4+0+0} = 2$
> 
> $\displaystyle \lim_{ n \to \infty } \frac{8n^3 + 5n^2}{4n^2 + n} = \lim_{ n \to \infty } \frac{8n + 5}{4 + n^{-1}} = \infty$, want de teller nadert tot oneindig en de noemer tot $4$.

### Limieten algebraisch bepalen
Voor machtsvergelijkingen:
- Als $a>0$, dan $\displaystyle\lim_{ n \to \infty }n^a = \infty$
- Als $a<0$, dan $\displaystyle\lim_{ n \to \infty }n^a = 0$
- Als $g > 1$, dan $\displaystyle \lim_{ n \to \infty }g^n = \infty$
- Als $0 < g < 1$, dan $\displaystyle \lim_{ n \to \infty }g^n = 0$
%%Todo: Lijst aanvullen zodat bijv ook lineaire en quadratische functies er bij staan.%%
### Limieten bepalen met webgrafieken
*Volgt nog*

## Opmerkingen
### Bronnen
- [De Wageningse Methode: Discrete dynamische modellen](https://wageningse-methode.nl/methode/het-lesmateriaal/?download_lesmateriaal=2015_456V+wiskunde+D%2F3.+Discrete+dynamische+modellen%2F3.+Discrete+dynamische+modellen_nieuw.pdf)
- [RU: Rijen en rijtjes](https://www.math.ru.nl/~keune/Getallen/Getallense25.xht)
- [RU: Recursieve definities](https://www.math.ru.nl/~keune/Getallen/Getallense26.xht)
### Oefenen
- [De Wageningse Methode: Discrete dynamische modellen](https://wageningse-methode.nl/methode/het-lesmateriaal/?download_lesmateriaal=2015_456V+wiskunde+D%2F3.+Discrete+dynamische+modellen%2F3.+Discrete+dynamische+modellen_nieuw.pdf)
- [De Wageningse Methode: Oefentoets](https://wageningse-methode.nl/methode/het-lesmateriaal/?download_lesmateriaal=2015_456V+wiskunde+D%2F3.+Discrete+dynamische+modellen%2FZT_DDM.pdf)