---
title: markdown-math
date: 2019-08-29 21:25:12
tags: Markdown
---

# Markdown 数学公式集

## 1. 如何插入公式
- 行中公式(放在文中与其它文字混编)可以用如下方法表示：
    >**$ 数学公式 $**
- 独立公式可以用如下方法表示：
    >**$ 数学公式 $**
- 自动编号的公式可以用如下方法表示：
  
## 2. 如何输入上下标
<!--more-->
^ 表示上标，_ 表示下标。如果上下标的内容多于一个字符，需要用 {} 将这些内容括成一个整体。上下标可以嵌套，也可以同时使用。   
- 例子：
  > '$$ x^{y^z}=(1+{\rm e}^x)^{-2xy^w} $$'
- 显示：
    > $$ x^{y^z}=(1+{\rm e}^x)^{-2xy^w} $$

另外，如果要在左右两边都有上下标，可以用 \sideset 命令
- 例子：
    > '$$ \sideset{^1_2}{^3_4}\bigotimes $$'
- 显示：
  > $$ \sideset{^1_2}{^3_4}\bigotimes $$

## 3. 如何输入括号和分隔符
()、[]和|表示符号本身，使用 ”\\{\\}“ 来表示 {}。当要显示大号的括号或分隔符时，要用 \left 和 \right 命令。
一些特殊的括号：

输入 | 显示
-|-
$$\langle表达式\rangle$$| ⟨表达式⟩
$$\lceil表达式\rceil$$ | ⌈表达式⌉
$$\lfloor表达式\rfloor$$ | ⌊表达式⌋
$$\lbrace表达式\rbrace$$ | {表达式}

- 例子：
  > '$$ f(x,y,z) = 3y^2z \left( 3+\frac{7x+5}{1+y^2} \right) $$'
- 显示：
  > $$ f(x,y,z) = 3y^2z \left( 3+\frac{7x+5}{1+y^2} \right) $$

## 4. 如何输入分数
通常使用 \frac {分子} {分母}命令产生一个分数\frac {分子} {分母}，分数可嵌套。
便捷情况可直接输入 \frac ab来快速生成一个\frac ab。
如果分式很复杂，亦可使用 分子 \over 分母 命令，此时分数仅有一层。

- 例子：
  > '$$\frac{a-1}{b-1} \quad and \quad {a+1\over b+1}$$'
- 显示：
  > $$\frac{a-1}{b-1} \quad and \quad {a+1\over b+1}$$

## 5. 如何输入开方

使用 \sqrt [根指数，省略时为2] {被开方数} 命令输入开方。

- 例子：
  > '$$\sqrt{2} \quad and \quad \sqrt[n]{3}$$'
- 显示：
  > $$\sqrt{2} \quad and \quad \sqrt[n]{3}$$

## 6. 如何输入省略号
数学公式中常见的省略号有两种，\ldots 表示与文本底线对齐的省略号，\cdots 表示与文本中线对齐的省略号。

- 例子：
    > '$$f(x_1,x_2,\underbrace{\ldots}_{\rm ldots} ,x_n) = x_1^2 + x_2^2 + \underbrace{\cdots}_{\rm cdots} + x_n^2$$'
- 显示：
    > $$f(x_1,x_2,\underbrace{\ldots}_{\rm ldots} ,x_n) = x_1^2 + x_2^2 + \underbrace{\cdots}_{\rm cdots} + x_n^2$$

## 7. 如何输入矢量
使用 \vec{矢量} 来自动产生一个矢量。也可以使用 \overrightarrow 等命令自定义字母上方的符号。

- 例子：
  > '$$\vec{a} \cdot \vec{b}=0$$'
- 显示：
  > $$\vec{a} \cdot \vec{b}=0$$
-----
- 例子：
    > '$$\overleftarrow{xy} \quad and \quad \overleftrightarrow{xy} \quad and \quad \overrightarrow{xy}$$'
- 显示：
  > $$\overleftarrow{xy} \quad and \quad \overleftrightarrow{xy} \quad and \quad \overrightarrow{xy}$$

## 8. 如何输入积分
使用 \int_积分下限^积分上限 {被积表达式} 来输入一个积分。

- 例子：

    > '$$\int_0^1 {x^2} \,{\rm d}x$$'

- 显示：
    > $$\int_0^1 {x^2} \,{\rm d}x$$

## 9. 如何输入极限运算
使用\lim_{变量 \to 表达式} 表达式 来输入一个极限。如有需求，可以更改 \to 符号至任意符号。

- 例子：

    > '$$ \lim_{n \to +\infty} \frac{1}{n(n+1)} \quad and \quad \lim_{x\leftarrow{示例}} \frac{1}{n(n+1)} $$'

- 显示：
    > $$ \lim_{n \to +\infty} \frac{1}{n(n+1)} \quad and \quad \lim_{x\leftarrow{示例}} \frac{1}{n(n+1)} $$


## 10. 如何输入累加、累积运算
使用 \sum_{下标表达式}^{上标表达式} {累加表达式} 来输入一个累加。
与之类似，使用 \prod \bigcup \bigcap 来分别输入累乘、并集和交集。
此类符号在行内显示时上下标表达式将会移至右上角和右下角。

- 例子：

    > '$$\sum_{i=1}^n \frac{1}{i^2} \quad and \quad \prod_{i=1}^n \frac{1}{i^2} \quad and \quad \bigcup_{i=1}^{2} R$$'

- 显示：
    > $$\sum_{i=1}^n \frac{1}{i^2} \quad and \quad \prod_{i=1}^n \frac{1}{i^2} \quad and \quad \bigcup_{i=1}^{2} R$$


## 11．如何输入希腊字母
输入 \小写希腊字母英文全称 和 \首字母大写希腊字母英文全称  来分别输入小写和大写希腊字母。
对于大写希腊字母与现有字母相同的，直接输入大写字母即可。
输入 | 显示 | 输入| 显示
-|-|-|-
\alpha|𝛼	|A	|𝐴
\beta	|𝛽	|B|	𝐵
\gamma|	𝛾|	\Gamma|	Γ
\delta|	𝛿	|\Delta|	Δ
\epsilon|	𝜖|	E	|𝐸
\zeta|	𝜁|	Z	|𝑍
\eta|	𝜂|	H	|𝐻
\theta|	𝜃|	\Theta	|Θ
\iota|	𝜄|	I|	𝐼
\kappa|	𝜅	|K|	𝐾
\lambda	|𝜆	|\Lambda|	Λ
\nu	|𝜈|	N|	𝑁
\mu	|𝜇|	M|	𝑀
\xi|	𝜉	|\Xi|	Ξ
o|	𝑜	|O|	𝑂
\pi|	𝜋|	\Pi|	Π
\rho|	𝜌|	P|	𝑃
\sigma|	𝜎|	\Sigma|	Σ
\tau|	𝜏|	T	|𝑇
\upsilon|	𝜐|	\Upsilon|	Υ
\phi|𝜙	|\Phi	|Φ
\chi|𝜒|X	|𝑋
\psi|𝜓|\Psi|	Ψ
\omega|	𝜔|	\Omega|	Ω


## 12.大括号和行标的使用
使用 \left 和 \right 来创建自动匹配高度的 (圆括号)，[方括号] 和 {花括号} 。
在每个公式末尾前使用 \tag{行标} 来实现行标。
例子：

  > 
    f\left(
    \left[ 
        \frac{
        1+\left\{x,y\right\}
        }{
        \left(
            \frac{x}{y}+\frac{y}{x}
        \right)
        \left(u+1\right)
        }+a
    \right]^{3/2}
    \right)
    \tag{行标}
    

- 显示：
  > $$
    f\left(
    \left[ 
        \frac{
        1+\left\{x,y\right\}
        }{
        \left(
            \frac{x}{y}+\frac{y}{x}
        \right)
        \left(u+1\right)
        }+a
    \right]^{3/2}
    \right)
    \tag{行标}
    $$


小技巧：

- 公式
    > "\smash{\displaystyle\max_{0 \leq q \leq n-1}} f(q) \le" 
- 显示：
$$\smash{\displaystyle\max_{0 \leq q \leq n-1}} f(q) \le n$$ 
- 公式
    > "f(x + \epsilon) \approx f(x) + f'(x) \epsilon + \mathcal{O}(\epsilon^2)."
- 显示:
    > $$f(x + \epsilon) \approx f(x) + f'(x) \epsilon + \mathcal{O}(\epsilon^2).$$
求导符号使用 "\text{d}x", 即：$\text{d}x$

interesting
