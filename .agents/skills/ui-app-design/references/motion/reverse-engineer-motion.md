---
Authority: Supporting Knowledge
Purpose: Process workflow for extracting, measuring, curve-fitting, and code-emitting motion from reference UI video or capture.
Consumers: SKILL.md, references/reverse-engineer-ui.md
Dependencies: easing-and-timing.md, spring-animations.md
Extension Points: Add specialized video motion extraction techniques.
---

# Reverse-Engineering Motion & Curve Fitting

This reference defines the analytical workflow for extracting, measuring, and recreating motion choreography from reference UI screen recordings or video captures.

> [!NOTE]
> **Tool Availability Notice:** This document specifies the analytical *process* (Extract \(\rightarrow\) Track \(\rightarrow\) Fit \(\rightarrow\) Annotate \(\rightarrow\) Emit \(\rightarrow\) Validate). Automated Python scripts (`extract_frames.py`, `track_motion.py`, `fit_curves.py`) are process illustrations and are **NOT** available as native executable tools in this environment unless separately installed. Manual measurement techniques detailed below are the standard operational path.

---

## 1. The Motion Deconstruction Workflow

```
+-----------------------------------------------------------------------------------+
|                           MOTION EXTRACTION PIPELINE                              |
+-----------------------------------------------------------------------------------+
|  [ 1. FRAME CALIBRATION ] ──> [ 2. DISPLACEMENT TRACKING ] ──> [ 3. CURVE FITTING ]|
|   Extract 60fps frames       Track (x,y,opacity) points        Fit cubic-bezier    |
|                                                                or spring (k,c)    |
|                                                                        │          |
|                                                                        ▼          |
|  [ 6. VALIDATION ]      <── [ 5. CODE EMISSION ]     <── [ 4. CHOREOGRAPHY ]    |
|   Side-by-side verification  Emit Tailwind / Framer Motion   Decompose staggers |
+-----------------------------------------------------------------------------------+
```

---

## 2. Step 1: Measurement & Frame Rate Calibration

1. Obtain a high-frame-rate recording (60fps preferred, 1 frame = `16.67ms`).
2. Identify the **Start Frame** (\(F_0\)) when element movement begins.
3. Identify the **Settling Frame** (\(F_e\)) when element comes to complete rest.
4. Calculate total duration:
   \[
   T_{\text{ms}} = (F_e - F_0) \times 16.67\text{ ms}
   \]

---

## 3. Step 2: Displacement Tracking & Curve Fitting

1. Sample element displacement at 4 intermediate points: \(25\%\), \(50\%\), \(75\%\), and \(90\%\) duration.
2. Plot normalized progress \(P(t) \in [0, 1]\) against normalized time \(t \in [0, 1]\).

### Matching to Bezier Profiles
- If \(P(0.25) \approx 0.60\): **Expressive Decelerate** `cubic-bezier(0.05, 0.7, 0.1, 1.0)`.
- If \(P(0.25) \approx 0.40\): **Standard Ease-Out** `cubic-bezier(0.16, 1, 0.3, 1)`.
- If \(P(0.50) > 1.0\): **Overshoot / Spring** (Measure peak overshoot height to estimate stiffness \(k\) and damping \(c\)).

---

## 4. Step 3: Choreography & Stagger Decomposition

1. Identify parent-child execution order.
2. Measure delay between item 1 start (\(F_{\text{item1}}\)) and item 2 start (\(F_{\text{item2}}\)):
   \[
   \text{Stagger Delay} = (F_{\text{item2}} - F_{\text{item1}}) \times 16.67\text{ ms}
   \]
3. Confirm total sequence cap does not exceed `300ms`.

---

## 5. Step 4: Code Output Emission

Translate measured values into clean declarative code:

```typescript
// Extracted Spec: 220ms duration, 40ms stagger, bezier(0.16, 1, 0.3, 1)
export const extractedMotionSpec = {
  container: {
    animate: { transition: { staggerChildren: 0.04 } }
  },
  item: {
    initial: { opacity: 0, y: 16 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
    }
  }
};
```
