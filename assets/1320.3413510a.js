const a=[.54,.11,.15,.12,.05,.48,-.01,.16,-.1,0,-.1,.23,-.33,-.06,-.01,.18,.21,-.01,-.34,.3,.03,-.06,.02,-.01,-.02,.04,-.09,-.11,.17,-.14,.14,-.13,.02,.84,.05,.23,.11,-.06,-.19,-.01,.02,.08,.16,.17,-.24,-.1,-.07,.22,-.11,-.09,-.11,.69,.12,.11,.11,-.04,-.19,.77,-.01,.06,.25,.03,.11,-.07,-.01,-.03,.1,-.08,-.06,.12,-.12,.07,.12,-.15,.17,.28,.05,.26,.09,.16,0,.05,.06,.07,.01,-.19,.02,-.15,-.12,-.03,.16,-.15,-.02,.03,.13,-.37,-.04,.38,-.02,.3,0,.16,.13,0,.02,-.28,.01,-.17,.04,.04,.34,-.12,-.15,.11,-.12,.05,.21,-.02,-.08,-.02,-.17,-.19,.29,-.1,.06,-.05,.11,.2,.11,-.01,-.02,-.17,.06,-.12,.23,.21,0,-.14,-.07,.93,.06,.95,.06,.06,.85,.01,.04,.23,.1,-.04,.16,.07,.17,.24,.04,.09,-.1,.49,.05,-.02,-.03,.12,-.18,.01,.04,.23,.03,.01,.1,.06,.72,0,.1,-.1,-.06,-.04,.02,-.17,.31,.06,-.02,.18,-.02,-.04,-.05,-.31,.23,.51,.14,.29,.16,.21,-.2,.14,.13,.07,.06,.38,.39,-.02,.08,-.06,-.01,.16,-.13,.06,-.09,.01,.03,-.43,.06,-.01,.2,.01,.78,.15,-.09,0,-.01,-.21,.09,.03,.06,.16,-.07,.02,.09,-.03,.19,-.01,-.03,-.09,-.08,.1,-.52,.76,-.05,-.07,.03,.02,.06,-.03,-.14,.02,.05,-.03,.03,.01,.19,.17,.08,-.27,.05,-.13,.1,-.22,-.33,.19,-.06,.09,.02,-.03,.11,.05,.18,.03,-.02,.04,-.04,.41,.14,.23,.03,.05,-.07,-.01,-.11,.24,.09,-.08,.01,-.24,.1,-.19,-.09,-.11,-.28,.06,.27,-.16,-.06,-.15,-.09,-.07,.03,.17,-.07,.39,.09,.03,.07,.01,-.06,-.07,.3,-.09,-.24,.08,.13,-.07,.12,-.14,-.31,.86,.02,.03,.05,0,.11,-.12,.04,.05,.01,.05,-.07,-.07,.03,.09,-.11,-.1,-.12,.03,0,-.18,-.18,.15,.07,.07,-.12,-.17,.08,.09,-.16,.1,.04,.05,-.12,.13,0,-.15,.1,.29,.52,-.08,-.07,.06,.03,-.02,.11,.12,.23,-.14,-.09,-.28,-.09,.12,.62,.01,.21,-.01,.02,-.08,-.05,.22,.32,.23,-.13,.04,-.06,.21,.07,-.01,0,.08,-.05,-.06,.04,-.11,-.05,-.04,.09,-.57,.14,-.15,-.21,.03,-.15,-.07,.16,-.07,-.02,-.03,.09,.03,.03,-.14,.02,.06,.09,.08,-.01,-.14,-.13,.08,.09,.29,.05,.05,.04,-.45,.57,-.2,.1,-.37,.17,.04,-.07,-.22,-.02,-.12,-.25,.21,.05,.37,.13,.09,-.02,-.01,.06,.31,.08,.09,.07,.47,-.1,.03,.02,-.13,.28,.14,-.13,.04,.01,-.16,-.05,.03,-.23,.08,.56,-.07,.16,.02,.14,.35,.02,-.07,-.12,-.22,.12,.1,-.15,.06,.47,.5,0,-.02,.04,.02,.11,-.22,.07,.05,.16,.05,-.01,-.12,.07,-.05,.12,.13,-.06,.22,-.13,-.12,.22,.04,-.09,-.12,.08,-.04,-.01,.29,-.01,.08,.14,.01,.28,.02,-.11,.21,.11,0,.06,-.08,-.06,.07,.43,-.09,.3,.13,0,.08,-.21,-.18,.22,.74,-.07,.48,.01,.03,-.01,-.11,-.06,0,.67,.67,.01,-.17,.18,.14,-.1,-.07,-.6,-.17,-.04,-.15,.46,-.2,.1,.06,-.29,.02,.06,.14,.1,-.39,-.08,-.16,-.09,-.07,.05,-.02,-.11,.06,.03,-.13,.04,-.23,.31,-.25,.15,.12,.18,-.12,.08,.08,-.11,-.27,-.08,.03,.03,.43,.11,.03,.04,0,.03,.23,.04,.06,-.11,-.12,-.12,.13,-.06,.28,-.01,.03,.64,-.16,.1,.17,.12,.27,.07,-.17,-.08,-.1,.17,.11,.01,.13,-.26,.25,-.37,.12,.01,.03,-.05,.47,.06,0,.01,.06,-.15,.36,-.07,0,.12,-.05,-.23,-.22,-.27,.15,-.05,.08,0,-.05,.08,-.27,.18,.1,-.08,-.02,.21,.06,.06,.08,-.38,.01,.4,.14,-.14,.05,-.03,.12,.02,.04,-.08,-.1,.05,.08,.06,.17,.01,.4,-.13,-.12,.12,.2,-.02,.15,-.04,-.18,.18,-.1,.06,.1,.02,.28,.05,.16,.01,.15,.45,.37,.13,.03,.02,.09,.2,-.13,.07,-.59,.88,-.08,.43,.23,.09,.1,.05,.01,.13,-.06,.09,-.22,.2,.24,.43,-.12,.06,-.18,.08,-.05,-.03,.05,-.06,-.07,-.08,.12,.04,.04,.11,-.26,.12,-.21,-.3,-.03,.45,.17,.14,.03,-.04,-.14,-.05,-.08,.02,-.1,-.16,-.21,-.13,.06,-.1,-.19,-.02,.25,-.04,.01,-.1,.26,.57,-.25,.05,.43,.07,-.25,-.29,.17,.25,.02,.18,-.14,.02,.16,.01,.13,.09,-.52,-.07,.65,.09,.1,.14,.73,.01,.31,-.11,.03,-.02,.05,.07,-.26,.18,.09,.12,.11,-.01,.27,-.02,-.21,-.14,-.17,.08,-.05,0,.01,.03,.1,-.05,.05,-.17,.27,-.29,.19,.23,-.04,-.03,-.05,.11,-.16,.07,.01,-.04,.04,-.03,-.12,-.22,-.13,.07,.05,.4,.4,-.04,-.24,-.15,.02,0,.17,-.04,.17,-.01,-.02,.26,.02,-.03,-.05,.16,-.26,.51,-.19,.09,.12,-.46,-.14,.03,.17,-.12,-.09,.03,.06,-.11,.01,.11,-.19,-.07,-.25,.19,-.05,.08,-.07,.13,.09,-.25,-.09,.18,.04,-.06,.55,-.13,-.11,-.14,.21,-.08,.01,.21,.1,.12,.03,-.11,.77,-.14,.11,-.17,.07,-.11,.1,.23,-.06,.13,-.02,-.01,-.35,-.32,.21,.09,-.34,.15,-.23,.07,-.01,-.04,-.1,-.08,.05,.81,-.07,.67,-.09,.55,-.03,.91,-.18,.08,.01,.16,-.07,.26,-.09,-.14,-.13,.26,-.13,-.21,.22,.08,.12,.67,.11,.07,.06,.2,.02,-.11,.09,.02,-.08,.16,0,.38,.07,.41,-.15,-.08,-.09,.01,-.17,-.04,.07,0,-.02,-.17,.13,-.19,-.23,-.07,.08,.08,0,.09,.01,.02,-.1,.01,-.03,.11,.02,.09,-.03,-.25,-.01,-.3,.21,.02,-.09,.04,-.04,-.08,-.06,.09,.02,.09,.02,-.19,.04,-.07,-.3,-.06,.49,.61,.32,-.18,-.07,-.01,-.05,-.06,.09,.11,.17,.07,-.19,.08,-.07,.13,.28,.26,.14,.47,.29,-.21,.41,-.08,.28,-.02,-.23,.2,-.04,-.01,.21,.15,.08,.1,-.33,.17,0,.06,-.17,.04,-.09,.61,-.14,-.2,-.29,.12,-.09,-.12,.14,-.05,-.05,.06,.06,-.2,.05,-.36,-.01,.12,-.01,.21,-.04,-.1,.23,.05,.03,.11,-.22,-.31,.1,-.04,.12,.18,-.04,-.26,.48,-.13,0,.21,.06,.05,-.02,.07,.12,.02,.53,.56,.05,0,-.15,.03,-.19,.43,.12,.8,-.13,.06,-.09,.32,-.06,.16,-.25,-.13,.05,-.02,-.04,.06,-.14,.15,.14,-.04,-.2,.06,.01,.11,-.13,.27,.14,.04,.14,-.02,-.15,.04,.1,-.55,.12,.12,-.23,.03,-.35,-.18,-.02,.13,0,.15,-.02,.35,.38,-.15,.27,.01,-.05,.16,-.01,-.03,.05,.06,-.24,.29,.08,.01,.11,.8,.13,.04,.19,-.21,.12,.13,.84,-.02,-.18,.14,-.14,.41,.22,.61,.08,-.2,-.01,.87,-.05,.49,.82,.04,0,.64,.12,-.15,.03,.08,.09,.14,0,-.19,.43,-.14,-.12,.07,-.17,-.04,.07,.01,.07,-.08,-.21,.22,.01,-.04,.69,0,-.05,.05,.11,.08,-.1,-.02,-.21,.07,.4,-.08,.17,.08,.08,0,.26,.39,.12,-.03,.1,.06,.21,.09,.07,.12,.49,-.31,-.02,-.02,.03,.49,.01,.1,.1,.19,.14,.05,.84,.85,.26,-.2,-.28,.25,.16,-.1,-.11,.03,.01,.13,.1,-.05,.28,.23,.87,0,.03,.13,.15,.85,.13,.43,.05,-.08,.56,.05,.07,.55,.24,.33,.28,.08,-.23,-.04,.12,.15,.06,.3,-.09,-.3,.35,-.16,-.13,.13,.58,.04,-.02,.12,.07,.2,-.03,.05,.3,-.03,-.11,.15,.42,-.01,.14,.11,.72,.04,.05,.25,.48,-.07,.21,.09,.3,-.04,-.01,-.24,.16,-.02,.13,-.04,.15,.34,-.09,.08,-.11,.44,.12,.04,.08,.02,0,-.15,.01,-.33,-.2,.19,-.1,-.02,1,.06,-.09,-.33,-.11,0,-.37,.14,.07,.09,-.25,-.1,.05,-.11,-.11,.11,.04,.05,.13,-.15,.11,-.04,-.48,.21,-.16,-.03,-.15,-.19,.13,.32,.03,.21,-.08,.1,-.16,-.49,-.07,-.14,0,.01,-.15,.08,.11,-.61,-.23,-.11,-.2,.09,-.12,.08,.07,-.21,-.08,-.23,.1,-.42,-.25,-.16,-.17,.16,-.23,-.05,-.21,-.2,.01,-.16,.03,-.63,-.08,.11,.04,.16,-.02,.14,.08,.05,.03,-.02,.62,.04,-.1,-.1,-.1,.05,.08,-.08,-.09,.3,-.08,-.1,.16,-.03,.01,.61,-.07,.14,-.02,-.09,-.04,.02,.12,-.05,.22,.15,.14,-.02,.13,-.1,.08,-.19,-.07,.28,.04,.09,.09,.08,.08,.11,.53,.11,-.38,.12,.01,-.16,.08,.71,-.15,.08,-.01,-.02,0,.29,-.23,.08,-.01,.08,-.09,-.08,.19,-.06,-.2,-.01,-.11,.23,.33,.09,.05,.02,.24,-.02,.01,.12,.05,-.21,-.04,.11,-.03,.06,-.02,.05,-.22,-.08,.01,-.16,-.12,-.19,-.13,.05,-.08,-.17,.2,-.15,.15,.04,-.15,.1,.01,.28,-.28,.04,.18,-.11,.03,.04,.13,-.09,-.07,.09,-.06,-.17,.27,.04,.03,.07,-.06,-.24,-.18,.07,-.07,-.1,-.16,.04,.1,-.1,.25,-.13,-.08,-.04,.73,.19,.07,.16,.08,-.08,-.1,.14,.12,.07,-.02,.22,.05,-.04,.03,.08,.07,0,-.04,-.16,.44,.05,.1,-.03,-.09,.06,.05,.9,.08,0,.06,-.02,-.08,-.07,.16,-.02,.17,.11,.11,-.13,-.05,-.01,-.16,-.01,.05,-.06,.04,.82,0,-.08,-.03,.04,-.03,-.05,0,.07,.16,-.02,.05,-.09,.06,.04,-.05,.1,-.09,-.17,-.1,.16,-.14,.03,-.05,.14,0,-.2,.07,.15,-.05,.06,.12,.13,.03,.17,.04,-.05,.03,-.22,.06,.01,.07,.18,.06,-.1,.01,.29,.06,-.1,.19,.17,-.11,-.25,.19,0,-.05,.15,-.15,.03,.3,-.04,-.26,-.11,.09,-.02,-.02,-.03,.03,.11,.47,0,-.09,-.02,-.02,-.09,.04,-.02,.13,.31,.02,.12,-.14,-.02,.2,.1,-.1,-.14,.09,.07,-.03,.02,.01,.11,-.08,.05,-.11,.01,.11,.09,-.2,0,-.24,.14,-.34,.17,.03,-.16,.06,-.05,.09,-.09,.04,.09,.08,-.01,-.06,-.15,-.02,.01,.08,-.03,.06,.06,0,.06,.03,.03,-.06,.08,.02,.05,-.14,.03,.18,.03,-.07,-.03,-.1,-.07,-.15,-.13,.07,.2,.09,-.11,.05,.08,.04,-.04,-.19,.12,.11,-.02,.31,-.42,.08,.01,.01,.09,.13,.09,.03,-.11,.04,-.12,-.07,.73,-.16,-.02,-.26,.08,.1,.09,.12,.06,.06,.1,.09,-.01,.08,-.17,-.09,.04,.01,-.22,-.12,0,-.01,-.04,.1,-.12,.15,-.08,.21,.04,-.01,-.26,.06,.05,.17,.06,-.09,-.19,.03,.05,.07,.02,.07,.15,-.14,-.04,.15,-.12,-.01,-.02,.46,.08,.06,-.07,.2,-.08,.06,-.12,.06,.05,.19,.17,-.09,-.13,-.03,.07,.01,.1,.19,.03,.08,.1,.13,.06,.05,.15,-.02,.04,-.01,-.13,.1,-.01,-.1,.47,-.03,.05,.1,.09,-.09,.18,.1,.04,-.2,.09,.07,.04,.88,.75,.01,.07,-.1,-.04,-.02,-.36,.08,-.06,-.01,-.17,.05,0,.16,-.01,-.01,-.03,-.05,-.03,.14,.11,-.11,.02,.25,0,.04,-.49,.04,.02,.25,-.08,-.17,.14,.01,.06,-.11,.07,-.22,.15,.07,.04,-.08,.04,.06,.44,-.13,-.39,.1,.11,.07,.18,-.03,0,-.12,.11,.03,-.02,.73,.04,.03,.08,.03,-.22,.12,.02,-.08,.17,.31,.14,.08,.02,-.07,-.06,.22,.08,-.22,-.22,.16,-.07,-.08,.18,.06,-.34,-.08,.15,.1,-.3,.06,.16,.4,-.03,.14,.35,-.1,.14,.04,.14,.03,-.21,-.07,.78,.26,.07,.14,.1,.07,.16,.01,.14,.02,.09,.1,-.03,-.5,.08,-.01,.03,-.2,.12,.33,.18,.5,.11,.12,-.2,.13,-.11,.08,.14,.07,-.03,.61,-.19,-.04,.4,.12,-.15,.1,.13,.01,.13,.02,.07,-.17,-.08,.05,-.14,-.22,-.04,0,.06,.16,-.19,.02,.03,-.08,.31,.18,0,.08,.1,-.29,-.02,.19,.09,.13,.07,.35,.15,.15,.05,.06,-.02,-.04,.1,.08,.11,.08,.08,.13,.08,.07,.12,.07,.06,.05,.06,.13,0,.06,-.2,.11,-.1,-.19,-.03,.03,.79,.01,-.16,-.1,.15,.14,.05,.17,-.05,.1,-.01,.04,.18,.02,.07,.17,.05,-.03,-.19,.19,.08,-.45,.47,-.18,-.12,-.11,.04,.74,-.14,.12];export{a as rvalData};
