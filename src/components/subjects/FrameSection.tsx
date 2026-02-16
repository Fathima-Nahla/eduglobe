"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FrameSection() {
  return (
    <div className="frame-container">
      <div className="frame-section">
        <div className="frame-bg"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="frame-content"
        >
          <h1 className="frame-title">Connect with Our Expert Tutors</h1>
          <p className="frame-description">
            Find expert tutors, explore their profiles, and book personalized
            sessions that fit your learning goals and schedule.
          </p>
          <Link href="/contact">
            <button className="frame-button">Book a Session Now</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
