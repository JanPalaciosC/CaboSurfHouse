import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  // Block scrolling of the background content when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg bg-baja-light p-6 shadow-2xl md:p-12">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-baja-blue/10 p-2 text-baja-blue transition-colors hover:bg-baja-blue/20 cursor-pointer"
        >
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <h2 className="mb-2 font-serif text-3xl font-semibold text-baja-dark">
          Privacy Policy for Baja Surf House
        </h2>
        <p className="mb-8 font-sans text-sm text-gray-500">Last updated: July 2026</p>

        {/* Content */}
        <div className="space-y-6 font-sans text-baja-dark leading-relaxed">
          <div>
            <h3 className="mb-2 font-semibold text-lg">1. Information We Collect</h3>
            <p>
              We collect information you provide directly to us when you fill out our contact form,
              including your first name, last name, email address, and phone number.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-lg">2. How We Use Your Information</h3>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-inside list-disc pl-4 space-y-1">
              <li>Respond to your comments, questions, and requests.</li>
              <li>Provide customer service and schedule property tours.</li>
              <li>Send you technical notices, updates, and administrative messages.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-lg">3. Information Sharing</h3>
            <p>
              We do not share, sell, or rent your personal information to third parties for
              marketing purposes. Your information is securely routed through our form provider
              (Formspree) solely for our direct communication with you.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-lg">4. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy or wish to request the deletion of
              your personal data from our records, please contact us at:{' '}
              <strong>Philmburns66@gmail.com</strong>.
            </p>
          </div>
        </div>

        {/* Bottom Button to Close */}
        <div className="mt-10 flex justify-end">
          <button
            onClick={onClose}
            className="bg-baja-blue px-6 py-2 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:scale-105 hover:bg-baja-green cursor-pointer"
          >
            I UNDERSTAND
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
