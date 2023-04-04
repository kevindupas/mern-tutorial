/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';

function GoalItem({ goal }) {
    const dispatch = useDispatch();

    console.log(goal._id);

    return (
        <li key={goal._id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow list-none">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-black">
                            Date :
                            {' '}
                            <span className="text-base text-black font-medium">
                                {new Date(goal.createdAt).toLocaleString('en-US')}
                            </span>
                        </h3>
                    </div>
                    <p className="mt-1 truncate text-sm text-black">
                        <br />
                        Goal :
                        {' '}
                        <br />
                        {' '}
                        <span className="text-base text-black font-medium">{goal.text}</span>
                    </p>
                </div>
            </div>
            <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="-ml-px flex w-0 flex-1">
                        <button
                            type="button"
                            onClick={() => dispatch(deleteGoal(goal._id), console.log(goal._id))}
                            className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                        >
                            Supprimer
                        </button>
                    </div>
                </div>
            </div>
        </li>

    );
}

export default GoalItem;
