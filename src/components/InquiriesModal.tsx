import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Proposal } from '../types';
import { Terminal } from 'lucide-react';

interface InquiriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  proposals: Proposal[];
  onClearInquiries: () => void;
}

export const InquiriesModal: React.FC<InquiriesModalProps> = ({
  isOpen,
  onClose,
  proposals,
  onClearInquiries
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black backdrop-blur-sm cursor-pointer"
          />

          {/* Inquiries Ledger Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-[#18181B] border border-white/10 text-white rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col max-h-[80vh] overflow-hidden"
          >
            <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-4">
              <div>
                <h2 className="text-lg font-display font-bold flex items-center space-x-2">
                  <Terminal size={18} className="text-blue-400" />
                  <span>Inbound Projects Ledger</span>
                </h2>
                <p className="text-xs text-neutral-400 mt-0.5">Stored locally in your secure sandbox browser database.</p>
              </div>
              <button 
                onClick={onClose}
                className="text-neutral-400 hover:text-white px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 transition cursor-pointer text-xs"
              >
                Close
              </button>
            </div>

            {/* Scrollable Ledger list */}
            <div className="flex-grow overflow-y-auto space-y-4 pr-1">
              {proposals.length === 0 ? (
                <div className="text-center py-12 text-neutral-500 font-mono text-xs">
                  No submitted proposals in local ledger.
                </div>
              ) : (
                proposals.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl bg-[#222226] border border-white/5 space-y-2 text-left">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-neutral-200">{item.name}</h4>
                        <p className="text-[10px] text-blue-400 font-mono">{item.email}</p>
                      </div>
                      <span className="text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded font-mono">
                        Budget: ${item.budget.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-xs text-neutral-400 bg-black/20 p-2.5 rounded border border-white/5 font-mono">
                      <div className="text-[10px] text-neutral-500 mb-1">PROJECT SCOPE: {item.projectType}</div>
                      "{item.message}"
                    </div>
                    <div className="text-[9px] text-neutral-500 text-right font-mono">
                      Received: {item.date}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-4">
              <button 
                onClick={onClearInquiries}
                className="px-3 py-1.5 bg-red-600/15 hover:bg-red-600/30 text-red-400 hover:text-red-300 font-mono text-[10px] tracking-wide uppercase rounded-lg transition cursor-pointer"
              >
                Clear Ledger
              </button>
              <span className="text-[10px] text-neutral-500 font-mono">
                {proposals.length} Total Sandbox Submissions
              </span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
