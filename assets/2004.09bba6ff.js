const a=[.45,.18,.25,.05,.2,.28,-.02,0,-.11,.04,.11,.28,-.28,-.29,.21,.22,.29,.02,-.29,.2,.04,.03,.09,.25,.05,.12,.08,.12,.04,.11,.17,.06,.2,.34,.15,.15,.37,.22,-.06,.18,-.05,.14,.24,.29,-.19,.16,.01,.28,.13,-.12,.11,.42,.27,.24,.15,.1,.09,.34,.01,.07,.1,.17,.17,-.04,.07,.15,.18,.19,.13,.05,-.08,.35,.05,-.13,.23,.12,.22,.05,.11,.24,-.05,.07,.02,.11,.09,-.14,.09,-.21,-.19,.04,.08,-.1,-.08,-.07,.26,-.37,-.12,.43,-.05,.06,-.2,.21,.1,-.19,-.02,-.3,.03,-.1,.25,.04,.08,0,.01,.06,.12,.18,.06,.12,-.02,.03,-.3,-.2,.26,-.26,.08,-.17,.23,-.06,.15,.25,-.09,-.03,.05,-.05,.43,.09,.02,-.13,.22,.29,.19,.38,.06,.13,.48,.15,.04,.08,.1,-.06,.19,-.02,.02,.37,-.06,.06,-.04,.59,.12,.15,-.09,.05,-.29,-.2,-.08,-.11,.06,.19,-.03,.06,.49,.17,.02,-.13,.02,.15,-.1,.09,.01,.2,-.13,.11,.04,.17,-.05,-.48,.38,.5,.04,.25,0,-.03,-.21,.08,.1,.27,.07,.19,.36,.05,.06,.07,.23,.49,-.04,.16,-.01,-.07,.03,-.44,-.03,.2,.32,.21,.34,.05,-.09,-.04,.15,-.01,.05,-.03,-.06,.29,-.06,.24,-.02,.17,.13,-.18,-.01,-.13,.18,.22,-.47,.5,.18,.06,.01,.19,.08,.23,-.08,-.01,-.01,-.01,.03,.04,.06,.03,-.1,-.19,.06,-.25,.21,-.24,-.18,-.06,-.07,.17,.15,-.01,-.01,.15,.15,-.04,-.02,.07,-.01,.24,.33,.14,.23,.2,.14,-.26,.15,.03,.16,.11,-.06,.01,.07,-.26,-.07,.11,-.07,.32,.08,.05,-.07,-.25,.18,-.03,-.09,.22,.16,.22,.09,.06,.2,.2,.1,-.08,.16,-.04,-.06,.17,-.09,.13,.12,-.15,-.33,.45,.09,.06,0,-.02,.17,-.09,.11,.16,.18,.15,-.04,-.11,.28,-.06,-.02,-.12,-.11,.12,.11,-.34,0,.18,.12,.12,-.02,-.02,.15,.12,-.12,-.04,.3,.2,-.11,.02,.12,-.07,.13,.08,.43,-.1,.01,.12,-.11,-.01,.11,.18,.06,-.1,-.14,-.19,0,-.13,.36,.27,.09,-.11,.13,-.23,-.1,-.06,.09,.14,-.13,0,-.02,.14,.16,-.04,.18,-.03,.03,.02,.01,-.08,.17,.22,.17,-.61,.06,-.05,-.15,.21,-.01,.02,-.07,-.09,.04,-.13,.13,.03,-.15,-.02,.19,.14,.05,.17,.15,-.08,-.25,.16,.23,.31,.14,.15,-.05,-.38,.3,.07,.22,-.45,-.21,.25,.2,-.32,-.13,-.09,-.23,-.1,.07,.32,.03,.21,-.02,.2,.24,.24,.09,.07,.09,.23,0,.12,.24,.12,.01,.3,.01,-.02,-.12,-.11,-.21,0,0,.31,.15,-.07,.18,.26,.07,.03,.09,.03,-.2,-.24,.11,.28,-.03,.29,.57,.48,-.02,.18,.27,-.03,.33,.07,.09,.25,.16,-.06,-.02,-.12,.03,-.12,.12,.15,-.03,.24,-.18,-.15,.3,.18,-.15,-.08,.11,0,.03,-.08,.07,.09,.16,-.13,.13,.2,.24,.13,.11,-.12,.13,-.07,.09,0,.3,-.02,-.01,.07,-.04,.24,-.01,-.09,.16,.46,.29,.31,.07,.26,-.07,-.14,-.15,.07,.51,.44,.08,.04,-.16,.25,.17,-.05,-.54,.12,.12,-.06,.4,.15,.18,-.11,.03,.24,.25,.28,.1,-.32,-.14,-.06,0,.04,.23,.07,-.15,-.13,.02,-.14,-.13,-.09,.18,-.3,.14,.24,-.09,-.05,.09,.26,-.16,-.1,-.14,-.04,.19,.49,.04,-.03,.01,.19,.24,.14,.13,.34,-.12,.11,.01,.15,-.21,.09,.06,.14,.32,.1,.11,.22,.17,.17,.13,-.03,.02,.06,.4,-.14,.06,.39,-.19,.04,-.35,.15,.2,.02,.11,.54,-.11,-.01,-.06,.02,-.18,.49,0,-.07,.13,-.06,-.29,-.03,-.2,-.08,-.02,.02,.23,.01,.02,-.12,.19,.16,.01,.21,.07,.15,-.16,.2,-.31,-.02,.39,.04,-.01,.25,.19,.19,.12,.09,-.29,-.04,.23,.14,.25,.22,.02,.47,.06,-.11,.08,.15,-.05,.12,-.05,.09,.19,-.1,.04,.17,-.07,.08,0,-.16,.14,.24,.06,.34,.25,.12,.19,-.06,.13,-.04,-.07,-.52,.33,-.18,.55,.2,.13,.07,.14,-.15,.01,-.01,.07,-.13,.14,.18,.33,.01,.14,-.11,.28,.03,-.2,-.05,-.22,.13,-.12,.06,-.04,.18,.4,-.06,.17,-.02,-.01,-.02,.56,.09,.16,.18,.23,-.06,-.02,-.07,.3,-.12,.11,-.24,.11,.22,-.01,.13,-.06,.13,-.04,.3,-.19,-.02,.61,0,.14,.22,.26,-.06,-.13,.24,.41,.02,.06,.12,.18,-.01,.07,.22,.13,-.44,-.1,.3,-.09,.04,.23,.51,-.02,.22,-.01,-.01,.18,.05,.15,-.04,.25,.19,.19,.06,-.03,.04,-.01,-.12,-.07,-.18,.03,.18,.15,.13,.25,.1,-.25,-.09,-.25,.15,-.25,.14,.47,-.04,.09,.03,.16,-.01,.03,.1,.22,-.02,.05,-.12,-.28,.04,-.08,.21,.42,.16,-.2,-.06,-.19,.26,.21,.26,-.17,.04,-.1,.21,.23,-.01,-.18,.15,0,-.19,.46,-.01,.23,.15,-.48,-.14,.06,.18,.01,.1,.05,.11,.07,.16,.09,-.31,.16,-.18,.2,-.02,-.02,.15,.09,.28,-.29,-.11,-.13,-.05,-.06,.52,-.04,-.08,-.14,.17,-.2,.01,-.13,.12,-.02,.02,.06,.45,.11,.31,-.12,.17,.11,.01,.01,-.05,.22,-.01,.15,-.56,-.44,-.02,.25,-.31,.03,-.35,.05,.14,.05,.01,.09,-.23,.49,.15,.39,-.07,.53,-.11,.35,.12,.11,-.29,.1,-.08,.36,-.03,-.14,-.22,-.06,-.11,-.12,.11,.18,.16,.43,.23,.06,.08,.01,.33,.16,.09,.05,-.2,-.04,-.05,.36,.14,.54,.09,-.05,.03,.05,.05,-.07,.29,.15,.12,-.12,-.23,-.19,-.08,-.06,.08,.15,-.08,.1,-.08,.23,-.02,.04,-.08,.09,.08,.02,.11,-.24,-.1,-.25,.08,.18,-.06,.05,-.04,-.09,-.11,-.1,.2,.19,-.04,-.06,-.02,-.04,-.23,-.08,.54,.58,.12,-.06,-.04,-.06,-.06,-.06,-.1,-.17,.02,-.21,-.03,.17,-.29,.05,.08,.21,.18,.52,.03,-.16,.36,.05,.12,-.1,-.01,-.01,-.12,.15,.06,-.14,.24,.07,-.1,.09,.04,.23,-.33,.24,-.24,.62,-.28,-.15,-.17,.12,-.06,-.22,.24,.2,-.26,.28,-.07,-.01,.26,-.21,-.19,.33,0,.31,.09,-.03,.27,.07,.2,.1,-.07,-.36,.22,.12,.1,-.09,.14,0,.56,-.07,.11,-.11,.04,.18,.05,.25,-.15,0,.18,.26,.24,-.13,.12,.3,0,.28,.22,.48,-.07,-.04,-.13,.13,.05,-.06,-.27,-.05,.04,-.03,-.19,.1,-.02,.15,.04,-.2,-.22,.2,.2,-.05,-.13,.05,-.08,.12,.13,.15,-.14,.21,.1,-.48,.06,-.1,-.05,.05,-.25,-.1,.15,.04,.16,.05,.21,.45,.4,-.24,.35,.11,.15,.14,.03,-.15,.3,.26,-.21,.27,.17,.15,-.2,.49,-.14,.2,.29,-.33,.01,.19,.47,.19,.16,.2,.05,.18,.03,.24,.09,.02,-.08,.47,-.03,.33,.52,.07,-.05,.33,-.08,.1,-.01,.19,.17,.13,.19,-.18,.59,-.22,-.14,.02,-.04,.23,.16,-.1,-.06,-.09,-.15,0,.02,-.06,.51,.25,.25,.04,.19,-.06,-.16,-.2,-.16,.18,.36,0,.16,.2,-.07,.15,.17,.32,.26,-.06,.12,-.07,.29,.03,-.04,.24,.39,-.42,-.1,.09,-.14,.14,.14,.07,.06,.15,.18,.11,.46,.44,.23,-.26,-.01,.06,.13,.09,-.13,.19,-.19,.17,.14,-.18,.16,.34,.47,.26,.19,.25,.12,.48,.07,.49,.03,.19,.51,.14,.07,.21,.2,.29,.05,.09,-.15,-.02,.13,.17,.19,0,-.06,-.14,.14,-.06,.12,.07,.59,.23,.04,.16,.08,.15,-.02,.15,.38,-.03,-.08,.05,.36,.14,-.14,0,.4,.2,.14,.17,.55,-.1,.21,.14,.19,0,-.21,-.09,.14,.03,.05,.15,-.01,.11,-.14,.2,.2,.09,-.17,.22,.14,-.08,.23,-.24,-.11,-.23,.03,-.03,.02,.25,.35,-.03,-.25,-.43,-.07,-.11,-.48,.14,.15,.1,-.01,.08,.24,-.2,.14,-.11,.1,-.05,.2,.06,.28,.04,-.58,-.17,.23,.02,-.26,-.09,.04,.46,-.04,.06,-.1,.11,-.02,-.54,.04,-.07,-.03,-.06,-.07,.17,.15,-.64,-.04,-.01,.03,.19,-.08,.13,-.02,-.01,0,-.05,.09,-.25,-.07,-.05,-.03,.18,-.14,-.04,-.1,-.05,.1,0,.11,-.29,.04,.07,.09,.14,.05,.1,-.01,.29,.11,-.03,.38,.19,-.23,-.1,-.07,.24,.23,-.03,.17,.05,-.09,-.07,.17,.19,.23,.52,-.13,.03,.28,.12,-.01,.18,-.06,.13,.21,-.01,-.02,.19,.17,.35,.08,-.16,.13,.21,.04,.12,.07,.05,.14,.16,.52,.08,-.39,.06,.36,-.06,.04,.48,-.07,-.01,-.21,-.01,.16,.24,.03,.18,.05,.16,.14,.14,-.07,.04,-.23,.03,-.16,.26,.15,.14,.09,.14,-.05,.01,.11,-.06,.04,-.1,.04,.09,.33,.05,.07,.08,-.17,-.21,.06,-.24,-.04,-.05,-.04,-.02,.08,-.09,.1,-.12,.12,-.1,-.07,-.09,.04,.17,-.12,-.14,.07,.07,.07,.14,-.02,-.11,.06,.27,-.09,-.24,.3,.1,-.16,.04,-.04,-.32,-.22,.03,-.3,.07,.04,-.05,.05,-.04,.2,-.04,-.05,.14,.42,.23,-.02,-.05,-.01,-.12,0,.11,.19,.05,.21,.07,.23,.21,-.07,.17,.11,.21,.01,-.37,.1,.13,.01,.07,-.1,.09,.13,.41,.07,.08,.29,.07,.04,-.06,.3,.03,-.08,.03,.03,.07,.05,.2,.01,.18,.19,-.04,.08,.52,.26,-.19,-.04,0,.21,-.02,.07,.13,.09,.08,.02,.04,.07,.2,.14,.2,.01,.15,-.16,-.17,-.06,.27,-.08,.16,.16,.04,.1,.04,-.12,.24,.28,.08,-.02,.29,-.06,.07,.25,-.23,-.17,.04,.24,0,.06,-.04,.1,.46,.16,-.06,.19,-.13,-.16,-.14,.22,.04,-.06,.19,-.17,.12,.12,-.06,-.2,-.08,.13,.13,.06,.15,.13,-.08,.2,-.05,.01,.17,-.12,-.15,.13,.08,.01,.13,.12,-.05,-.02,.05,0,.1,-.19,-.11,.24,.24,.2,.24,0,.19,0,.05,-.02,-.11,.07,0,-.04,.04,-.25,.04,-.29,.28,.12,.26,.14,-.07,-.01,.18,-.05,.14,.17,.09,-.18,-.24,0,-.09,.03,.04,.19,.24,.24,-.06,.13,.18,.16,.2,.06,.22,-.05,-.05,.04,.1,-.06,-.24,-.09,.02,.01,-.1,.25,.27,.2,-.06,.17,.06,.1,-.15,.1,.11,.21,.09,.3,-.27,.04,.01,.01,.17,.3,.14,.14,-.14,-.09,-.01,.19,.5,-.11,-.18,-.24,.17,.03,.19,.07,.31,.21,.21,-.03,.1,.16,.1,.02,.04,.11,-.09,-.29,-.07,-.28,-.09,0,-.12,-.11,-.05,.34,0,.06,-.23,.13,.26,.06,.18,-.14,.03,.03,-.08,.14,.24,.2,.12,.18,.04,-.09,-.01,-.01,.14,.13,.15,.23,-.02,.06,-.05,-.12,0,-.06,.05,.28,.12,.12,-.02,-.05,.16,.01,.09,.35,-.01,.31,.12,.2,.24,.25,.18,.05,.04,-.04,.1,.21,.04,-.23,.01,.17,.27,.09,.1,-.13,.11,.08,.19,0,.19,.08,-.16,.47,.48,.21,-.02,-.02,.1,.21,-.32,.2,.06,-.06,-.16,.04,-.11,.05,.25,-.08,-.01,-.01,-.12,.14,.18,0,-.13,.32,.03,.22,-.37,-.04,.01,.1,.1,-.04,.17,-.13,.11,-.07,.28,-.14,-.01,-.05,.16,.12,-.02,.19,.29,-.34,-.53,.18,.17,.12,.19,.14,.07,-.01,.11,-.03,.06,.43,.04,.22,.1,.23,-.32,.27,.19,-.16,.16,.22,.21,.14,.14,-.1,-.13,.08,.09,-.16,-.25,.09,0,-.11,.16,.23,-.33,.06,.12,-.09,-.25,.03,-.06,.56,-.15,.21,.34,.2,.1,-.02,.08,-.11,.01,-.03,.43,.29,.1,-.12,.35,.24,.18,.19,.29,.29,.25,.1,.22,-.53,.01,.07,.11,-.14,.18,.19,-.05,.36,.21,.18,-.06,.07,.08,.21,.26,.17,-.02,.42,-.16,0,.55,.15,-.02,.11,.17,.02,.31,.02,.26,-.07,-.02,.18,0,-.15,-.01,.02,.25,.18,.03,-.03,0,.32,.32,.22,.06,.18,.2,-.19,.14,.18,.17,.22,.24,1,.14,.17,.14,.16,-.05,-.05,.24,.15,.02,.28,.16,.35,.22,.28,.4,.03,0,.22,.13,.12,.19,.07,-.11,.12,.22,.1,-.26,.17,.52,.28,-.04,-.05,.12,.22,.11,.18,-.05,.1,.16,.06,.22,.01,.32,.28,.09,-.18,.07,.17,.14,-.3,.5,-.26,-.02,-.05,.23,.51,-.07,.08];export{a as rvalData};
