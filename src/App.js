import React, { Component, Suspense } from "react";
import "./App.css";
import {
  CiltBakimi,
  Yuzbakimi,
  Vitaminler,
  Multivitaminler,
  Mineraller,
  Bitkiler,
  Kolajen,
  Vucutbakim,
  Sacbakimi,
  Fasonuretimpage,
  Makinalar,
  Laboratuvar,
} from "./pages";
import {
  Homepage,
  About,
  Blog,
  Contact,
  Production,
  Technology,
} from "../src/pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";


class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/production" element={<Production />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/technology/makinalar" element={<Makinalar />} />
            <Route path="/technology/laboratuvar" element={<Laboratuvar />} />
            <Route path="/production/ciltbakimi" element={<CiltBakimi />} />
            <Route path="/production/vucutbakimi" element={<Vucutbakim />} />
            <Route path="/production/sacbakimi" element={<Sacbakimi />} />
            <Route path="/production/yuzbakimi" element={<Yuzbakimi />} />
            <Route path="/production/vitaminler" element={<Vitaminler />} />
            <Route
              path="/production/multivitaminler"
              element={<Multivitaminler />}
            />
            <Route path="/production/mineraller" element={<Mineraller />} />
            <Route path="/production/bitkiler" element={<Bitkiler />} />
            <Route path="/production/kolajen" element={<Kolajen />} />
            <Route
              path="/production/fasonuretim"
              element={<Fasonuretimpage />}
            />
          </Routes>
        </ScrollToTop>
      </Router>
    );
  }
}
export default App;
