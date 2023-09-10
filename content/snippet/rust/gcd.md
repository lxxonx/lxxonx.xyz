---
title: Rust GCD
linkTitle: GCD
weight: 2
---

```rust
fn gcd(mut a: u32, mut b: u32) -> u32 {
    while b != 0 {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    a
}
```
