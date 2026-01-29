# References

## Constants and Conversions

## Formulas
# Algebraic Substitution of Trigonometric Functions

## Type A: Sine and Cosine

### Case 1: If $a$ or $b$ is odd
**Identity:**
Since $\sin^2u = 1-\cos^2u \iff \cos^2u = 1-\sin^2u$.

**General Form:**
$$
\begin{align*}
\text{If } a \text{ is odd:} \quad & \int \sin^a u \cos^b u \, du \implies \int \sin u \cdot (\sin^{a-1} u \cos^b u) \, du \\
\text{If } b \text{ is odd:} \quad & \int \cos^a u \sin^b u \, du \implies \int \cos u \cdot (\cos^{a-1} u \sin^b u) \, du
\end{align*}
$$

---

**Problem:**
Evaluate the integral:
$$
\int \sin^3 x \cos^2 x \, dx
$$

**Solution:**
Rewrite the odd power:
$$
\begin{align*}
\int \sin^3 x \cos^2 x \, dx &= \int \sin x (\sin^2 x \cos^2 x) \, dx \\
&= \int \sin x \left[ (1-\cos^2 x)\cos^2 x \right] \, dx \\
&= \int (\sin x \cos^2 x - \sin x \cos^4 x) \, dx
\end{align*}
$$

**Substitution:**
Let:
$$
\begin{aligned}
u &= \cos x \\
du &= -\sin x \, dx
\end{aligned}
$$

**Calculation:**
$$
\begin{align*}
\text{Integral} &= -\int u^2 \, du + \int u^4 \, du \\
&= -\frac{u^3}{3} + \frac{u^5}{5} + C \\
&= \boxed{-\frac{\cos^3 x}{3} + \frac{\cos^5 x}{5} + C}
\end{align*}
$$

---

### Case 2: Even Powers
**Identity:**
Since $\sin^2 u = \frac{1-\cos 2u}{2}$ and $\cos^2 u = \frac{1+\cos 2u}{2}$.

**General Form:**
$$
\int (\sin^2 u)^a \cos^b u \, du = \int \left( \frac{1-\cos 2u}{2} \right)^a \cos^b u \, du
$$

---

**Problem:**
Evaluate the integral:
$$
\int \sin^2 4x \cos^2 8x \, dx
$$

**Solution:**
Apply the half-angle identity:
$$
\begin{align*}
\int \sin^2 4x \cos^2 8x \, dx &= \int \left( \frac{1-\cos 8x}{2} \right) \cos^2 8x \, dx \\
&= \frac{1}{2} \int (1-\cos 8x)\cos^2 8x \, dx \\
&= \frac{1}{2} \int (\cos^2 8x - \cos^3 8x) \, dx
\end{align*}
$$

Split into two integrals:
$$
= \frac{1}{2} \underbrace{\int \cos^2 8x \, dx}_{I_1} - \frac{1}{2} \underbrace{\int \cos^3 8x \, dx}_{I_2}
$$

**Evaluate $I_1$:**
$$
I_1 = \int \frac{1+\cos 16x}{2} \, dx = \frac{1}{2}x + \frac{1}{32}\sin 16x
$$

**Evaluate $I_2$:**
$$
I_2 = \int \cos 8x (1-\sin^2 8x) \, dx = \frac{1}{8}\sin 8x - \frac{1}{24}\sin^3 8x
$$

**Final Answer:**
$$
\boxed{\frac{1}{4}x + \frac{1}{64}\sin 16x - \frac{1}{16}\sin 8x + \frac{1}{48}\sin^3 8x + C}
$$

---

## Type B: Cosecant and Cotangent

### Case 1: Cosecant is Even
**Identity:**
$\csc^2 u = 1 + \cot^2 u$

**Problem:**
Evaluate the integral:
$$
\int \csc^4 x \cot^2 x \, dx
$$

**Solution:**
Rewrite $\csc^4 x$:
$$
\begin{align*}
\int \csc^4 x \cot^2 x \, dx &= \int (\csc^2 x)(\csc^2 x)\cot^2 x \, dx \\
&= \int (1+\cot^2 x)(\csc^2 x) \cot^2 x \, dx \\
&= \int (\cot^2 x + \cot^4 x) \csc^2 x \, dx
\end{align*}
$$

**Substitution:**
Let:
$$
\begin{aligned}
u &= \cot x \\
du &= -\csc^2 x \, dx
\end{aligned}
$$

**Calculation:**
$$
\begin{align*}
&= - \int (u^2 + u^4) \, du \\
&= - \left( \frac{u^3}{3} + \frac{u^5}{5} \right) + C \\
&= \boxed{-\frac{1}{3}\cot^3 x - \frac{1}{5}\cot^5 x + C}
\end{align*}
$$

---

## Type C: Secant and Tangent

* **Case 1 (Even):** Use $\sec^2 u = 1 + \tan^2 u$.
* **Case 2 (Odd):** Use Integration by Parts.

---

# Inverse Trigonometry

## Type 1: Arcsine
**Formula:**
$$
\int \frac{du}{\sqrt{a^2 - u^2}} = \arcsin \frac{u}{a} + C \quad (\text{for } a > u)
$$

**Problem:**
Evaluate:
$$
\int \frac{dx}{\sqrt{4 - 16x^2}}
$$

**Substitution:**
Let:
$$
\begin{aligned}
a &= 2 \\
u &= 4x \implies du = 4 \, dx
\end{aligned}
$$

**Solution:**
$$
\begin{align*}
\int \frac{dx}{\sqrt{4 - 16x^2}} &= \frac{1}{4} \int \frac{du}{\sqrt{a^2 - u^2}} \\
&= \frac{1}{4} \arcsin \frac{u}{a} + C \\
&= \boxed{\frac{1}{4} \arcsin(2x) + C}
\end{align*}
$$

---

## Type 2: Arctangent
**Formula:**
$$
\int \frac{du}{u^2 + a^2} = \frac{1}{a} \arctan \frac{u}{a} + C
$$

**Problem:**
Evaluate:
$$
\int \frac{dx}{x^2 + 9}
$$

**Substitution:**
Let:
$$
\begin{aligned}
a &= 3 \\
u &= x \implies du = dx
\end{aligned}
$$

**Solution:**
$$
\begin{align*}
\int \frac{dx}{x^2 + 9} &= \int \frac{du}{u^2 + a^2} \\
&= \frac{1}{3} \arctan \frac{x}{3} + C \\
&= \boxed{\frac{1}{3} \arctan \left( \frac{x}{3} \right) + C}
\end{align*}
$$

---

## Type 3: Arcsecant
**Formula:**
$$
\int \frac{du}{u \sqrt{u^2 - a^2}} = \frac{1}{a} \operatorname{arcsec} \frac{u}{a} + C
$$

**Problem:**
Evaluate:
$$
\int \frac{dx}{x \sqrt{2x^2 - 10}}
$$

**Substitution:**
Let:
$$
\begin{aligned}
a &= \sqrt{10} \\
u &= \sqrt{2}x \implies du = \sqrt{2} \, dx
\end{aligned}
$$

**Solution:**
$$
\begin{align*}
\int \frac{dx}{x \sqrt{2x^2 - 10}} &= \int \frac{1}{\sqrt{2}} \cdot \frac{du}{\frac{u}{\sqrt{2}} \sqrt{u^2 - a^2}} \\
&= \int \frac{du}{u \sqrt{u^2 - a^2}} \\
&= \frac{1}{\sqrt{10}} \operatorname{arcsec} \frac{\sqrt{2}x}{\sqrt{10}} + C \\
&= \boxed{\frac{1}{\sqrt{10}} \operatorname{arcsec} \left( \frac{x}{\sqrt{5}} \right) + C}
\end{align*}
$$

---

# Trigonometric Substitution

## Type A: Sine Substitution
**Form:** $\sqrt{a^2 - u^2} \implies u = a \sin \theta$

**Problem:**
Evaluate:
$$
\int \frac{dx}{\sqrt{4 - x^2}}
$$

**Substitution:**
Let:
$$
\begin{aligned}
x &= 2 \sin \theta \\
dx &= 2 \cos \theta \, d\theta \\
\sqrt{4-x^2} &= 2 \cos \theta
\end{aligned}
$$

**Solution:**
$$
\begin{align*}
\int \frac{dx}{\sqrt{4 - x^2}} &= \int \frac{2 \cos \theta \, d\theta}{2 \cos \theta} \\
&= \int d\theta \\
&= \theta + C
\end{align*}
$$

**Back Substitution:**
Since $\sin \theta = \frac{x}{2} \implies \theta = \arcsin \frac{x}{2}$.

**Final Answer:**
$$
\boxed{\arcsin \left( \frac{x}{2} \right) + C}
$$

---

## Type B: Tangent Substitution
**Form:** $\sqrt{u^2 + a^2} \implies u = a \tan \theta$

**Problem:**
Evaluate:
$$
\int \frac{x^3 \, dx}{\sqrt{2x^2 + 7}}
$$

**Substitution:**
Let:
$$
\begin{aligned}
\sqrt{2}x &= \sqrt{7} \tan \theta \implies x = \sqrt{\frac{7}{2}} \tan \theta \\
dx &= \sqrt{\frac{7}{2}} \sec^2 \theta \, d\theta \\
\sqrt{2x^2 + 7} &= \sqrt{7} \sec \theta
\end{aligned}
$$

**Solution:**
$$
\begin{align*}
\int \frac{x^3 \, dx}{\sqrt{2x^2 + 7}} &= \int \left( \frac{7\sqrt{7}}{2\sqrt{2}} \tan^3 \theta \right) \frac{1}{\sqrt{7}\sec \theta} \left( \sqrt{\frac{7}{2}} \sec^2 \theta \, d\theta \right) \\
&= \frac{7\sqrt{7}}{4} \int \tan^3 \theta \sec \theta \, d\theta \\
&= \frac{7\sqrt{7}}{4} \int (\sec^2 \theta - 1) \sec \theta \tan \theta \, d\theta
\end{align*}
$$

Integrate:
$$
= \frac{7\sqrt{7}}{4} \left[ \frac{\sec^3 \theta}{3} - \sec \theta \right] + C
$$

---

# Miscellaneous Substitution

## Type A: Algebraic
**Substitution:** $z = x^n$

**Problem:**
Evaluate:
$$
\int x^5 \sqrt{1 + x^6} \, dx
$$

**Substitution:**
Let:
$$
\begin{aligned}
z &= \sqrt{1 + x^6} \\
z^2 &= 1 + x^6 \\
2z \, dz &= 6x^5 \, dx \implies x^5 \, dx = \frac{1}{3}z \, dz
\end{aligned}
$$

**Solution:**
$$
\begin{align*}
\int x^5 \sqrt{1 + x^6} \, dx &= \int \frac{1}{3} z \cdot z \, dz \\
&= \frac{1}{3} \int z^2 \, dz \\
&= \frac{1}{3} \left( \frac{z^3}{3} \right) + C \\
&= \boxed{\frac{(1 + x^6)^{3/2}}{9} + C}
\end{align*}
$$
