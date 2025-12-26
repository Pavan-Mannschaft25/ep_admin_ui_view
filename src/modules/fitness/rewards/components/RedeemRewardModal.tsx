// src/modules/fitness/rewards/components/RedeemRewardModal.tsx
import React from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { redeemReward, MemberRewardProgress, Reward } from "../rewardsSlice";
import { FiX, FiGift, FiUser, FiCalendar, FiCheckCircle } from "react-icons/fi";

interface RedeemRewardModalProps {
  member: MemberRewardProgress;
  reward: Reward;
  onClose: () => void;
}

const RedeemRewardModal: React.FC<RedeemRewardModalProps> = ({
  member,
  reward,
  onClose,
}) => {
  const dispatch = useAppDispatch();

  const handleRedeem = () => {
    dispatch(redeemReward({ memberId: member.memberId, rewardId: reward.id }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-orange-100 rounded-full mb-4">
            <FiGift className="h-6 w-6 text-orange-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 text-center mb-2">
            Redeem Reward
          </h3>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <FiUser className="text-gray-500 mr-2" />
              <span className="text-sm text-gray-900">
                {member.memberName} (ID: {member.memberId})
              </span>
            </div>
            <div className="flex items-center">
              <FiCalendar className="text-gray-500 mr-2" />
              <span className="text-sm text-gray-900">
                Available Rewards: {member.availableRewards}
              </span>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <img
                src={reward.image}
                alt={reward.name}
                className="w-12 h-12 rounded object-cover mr-3"
              />
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  {reward.name}
                </h4>
                <p className="text-xs text-gray-600">
                  {reward.category} - ₹{reward.value}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">{reward.description}</p>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleRedeem}
              disabled={member.availableRewards <= 0}
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center"
            >
              <FiCheckCircle className="mr-2" />
              Redeem Reward
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedeemRewardModal;
