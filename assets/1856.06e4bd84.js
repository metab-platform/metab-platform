const a=[-.12,.16,.13,-.07,.26,.05,-.03,.06,.03,.19,-.07,-.08,-.01,-.22,0,.09,-.02,.12,.04,.1,-.02,-.2,.18,.01,-.01,.37,-.15,.29,.79,-.15,.09,-.18,.27,.02,-.4,.3,.18,-.05,.09,.26,-.07,.36,.46,-.04,.02,-.14,-.16,-.19,.12,.15,-.19,.22,.29,.25,.18,-.08,-.07,.21,.48,.08,.24,.27,.42,.11,.13,-.04,.37,.02,-.04,.1,.1,.22,.09,-.03,.31,-.01,.01,.22,-.19,.11,-.24,.04,-.24,.41,-.28,-.12,.38,-.02,-.21,.07,.22,.16,.21,-.08,-.18,.08,-.28,-.21,-.02,.25,-.16,.29,.04,-.06,.19,.08,.12,.04,.35,.1,-.13,.09,-.05,-.09,-.08,.27,-.22,.01,-.16,.05,.05,-.06,.02,.01,.52,.21,.19,-.27,.05,.25,.23,.08,-.12,0,.11,.09,.26,.07,.04,.12,.41,.14,.53,.42,.18,.05,.07,.23,.34,-.11,.25,-.14,.17,-.13,.33,.24,.55,-.05,-.13,-.01,.22,.29,.19,-.01,.17,.11,-.08,.03,.07,.12,.02,-.03,.29,-.05,.44,.03,-.06,.02,.11,.21,-.14,0,.09,.1,.25,.04,-.03,.15,.26,-.17,-.03,.09,-.01,.23,.21,.25,.17,.03,-.01,-.16,-.03,.13,.23,.02,-.3,.15,.45,.22,.1,.11,.23,.02,0,.13,.21,.22,0,.36,.08,-.06,.45,.1,-.01,.27,.29,.28,.21,.06,.11,.2,-.06,-.09,.23,.13,.13,.12,.04,-.06,.09,-.03,.13,-.01,.18,.21,.32,.03,.06,.02,.25,0,.05,.2,.19,.04,.4,.1,.07,-.24,-.05,.13,.09,.2,-.07,.4,.12,.13,-.11,.45,-.41,.36,.04,-.57,.14,.18,-.04,.07,.15,.18,.07,.11,.23,-.12,-.08,-.02,.3,.3,-.16,.14,.09,.01,-.16,.21,.34,.03,.13,.45,-.01,-.04,.02,.26,-.03,.24,-.13,-.13,-.06,.46,.06,.2,.15,-.1,.33,.04,-.17,.18,-.01,.26,.12,.26,.16,.03,.45,-.1,.06,.3,.15,.31,.47,.21,.09,.33,-.07,.46,.26,.06,-.11,-.05,.04,.48,.07,-.17,.31,.31,-.14,.11,.22,.15,.06,.26,.43,.27,.36,.2,.02,.3,-.06,-.07,.07,.07,.07,.07,.19,.08,.36,.07,-.08,-.14,.34,.24,.18,.11,.26,-.08,.08,.03,.17,.26,.32,.44,.01,.24,.16,.09,-.06,.26,.03,.2,.05,.02,.22,.25,.17,-.02,-.14,.02,-.06,.28,-.34,-.07,.12,.53,-.17,.21,.14,.19,.21,.05,.13,.14,.25,.27,.16,-.12,-.3,.13,.03,-.04,.41,.34,.23,-.03,.2,.22,.08,.06,-.01,.32,.17,-.04,.25,.1,.17,.01,.02,-.03,.22,.16,.12,.45,.39,.19,.35,.34,.51,.14,.09,.29,.25,.47,.07,-.21,.05,.19,-.26,.24,-.29,.05,-.12,.26,.23,-.05,.28,.39,-.25,.2,.17,-.13,-.03,-.2,-.25,.19,.1,.2,.14,.04,.23,.26,.3,-.13,.2,-.11,.35,.11,.26,.18,.03,.22,.29,.15,.25,.07,-.07,-.11,.14,.18,.27,.33,.04,-.07,-.09,.07,.51,.22,-.02,.23,.35,.07,.27,.15,.34,.23,.3,.15,.51,.07,-.01,-.03,.13,.27,.26,.38,.05,.22,0,-.15,.11,.02,.17,.31,.11,.4,.23,.05,-.05,.29,.11,.18,.09,.15,.24,.02,0,.28,.03,.08,.07,-.07,.35,.07,.1,.79,-.12,.27,.29,.07,.27,.11,-.19,.37,-.08,.01,.06,-.08,.33,.17,-.04,-.06,.02,-.04,.14,-.09,.16,.19,-.04,.21,.24,.24,-.11,-.01,.12,.08,.05,.07,.4,.31,.13,.06,.25,.22,.08,.17,-.12,.07,.06,.15,.17,-.21,.21,.18,.34,.1,-.06,.26,.2,.09,.36,-.1,.29,-.19,.01,.72,.09,.12,0,.1,.03,0,.27,.04,.04,.07,.2,.16,.31,-.13,.18,-.29,.25,.12,.39,.01,-.1,-.32,-.16,.14,.04,.06,.28,.15,.11,-.14,.09,.24,-.21,.25,0,.33,.17,.38,-.02,.14,-.21,-.29,.41,.35,.27,-.01,-.16,.08,0,-.09,.25,.43,.28,.27,-.04,-.03,.14,.18,.31,.4,.21,.01,-.13,-.1,.13,.12,.16,.23,-.19,.22,.05,.28,.12,.41,.18,.16,-.11,.4,.35,-.08,.09,.12,.25,-.07,.08,.05,.11,-.29,.16,-.1,.4,.21,.31,.35,.04,.12,-.09,.16,-.03,-.1,.24,.03,.13,.04,-.07,0,.28,0,.05,-.06,.19,.34,.15,.03,.26,.22,-.14,-.27,-.16,.31,-.17,.06,.25,.09,.27,.28,.21,-.11,.23,.06,-.17,.12,-.17,.04,-.02,-.2,.17,.1,.16,.34,-.12,-.02,-.26,.44,0,.01,.07,.36,.33,-.16,.12,.06,.36,.1,.43,.28,.44,.04,.06,.17,.19,.09,.25,.12,.24,-.2,.16,.03,.28,.29,.16,-.01,-.04,.53,.11,.34,.28,.17,-.17,-.22,-.19,.17,.14,-.05,.39,.08,.24,.51,.25,.04,.23,.2,-.06,.35,.06,.32,.11,-.21,.25,0,.04,.16,.25,-.33,.24,.18,-.18,.11,.08,.35,-.05,.19,.16,.13,-.08,.21,-.08,-.12,-.03,0,.19,.21,.03,-.07,.06,-.15,.15,.02,.03,-.04,.23,.15,.02,.13,-.34,.17,.09,-.07,.34,-.08,.03,.01,.22,-.05,.06,.2,.26,.2,.13,-.17,.26,.3,.06,.06,.27,.28,-.1,-.02,.33,.2,.06,.06,.23,.23,.14,.21,.85,.04,-.1,.17,-.02,.19,-.03,.36,.14,.03,.22,.37,.37,.29,.34,-.1,-.1,.4,.47,.05,-.09,.11,.19,.28,-.02,-.18,.01,0,.14,.25,.23,.31,-.05,.26,.05,.06,-.11,.13,.26,.24,-.04,.15,.2,-.12,.12,.09,.11,.2,.37,.23,.04,.27,.25,.27,.09,.1,.13,.39,.33,-.22,.18,-.11,.13,.33,-.08,.05,.07,.28,.32,.3,.09,.13,-.1,.2,.09,-.15,.17,.03,.45,.1,.36,.11,.42,-.16,.37,-.02,.3,-.24,.28,.2,-.03,-.14,-.06,.07,.11,-.13,-.12,-.21,.45,-.2,.24,.29,0,.23,.42,.36,-.08,.35,.07,.16,.09,.02,-.02,.17,.33,.11,.29,.16,-.11,.17,.07,.04,.08,.08,.03,-.06,-.13,-.07,-.02,-.13,-.02,.02,.04,-.03,-.11,.25,.2,-.06,.02,0,.16,-.06,.23,.02,.38,.22,.11,.22,.26,.25,.21,0,.12,.14,.28,-.12,.14,.29,.01,.22,.22,-.17,.28,.01,.15,.27,-.21,.02,-.12,.23,-.17,.11,.03,.32,.07,.26,.02,-.01,.19,-.23,-.17,.21,.14,.38,-.16,-.01,-.05,.18,.14,-.11,.05,.09,.07,.07,.13,.25,.3,.15,-.18,.46,.11,.06,.44,.27,.13,-.08,.17,.01,.21,.24,.03,.13,-.17,.37,.58,.2,.38,-.14,.03,.46,.16,.23,.41,.48,-.05,-.04,.19,.13,.24,.16,.33,-.01,.34,.04,-.03,.27,.19,.07,.01,-.05,-.1,.11,.11,.32,-.34,.01,-.23,-.05,-.17,.01,0,-.18,.25,-.13,.09,.37,.32,.11,-.11,.22,.35,.36,.23,-.2,.48,-.28,-.17,-.23,.4,.19,.33,-.03,.05,.06,.12,-.31,.24,.31,-.08,.17,.19,-.01,.14,.17,-.07,-.11,.19,.06,.25,.01,.44,.33,.15,.3,-.11,-.02,-.17,.32,.23,.05,.18,.09,.05,.02,.13,.12,.14,.17,-.21,.09,.3,.19,.53,.1,.76,-.24,-.12,.12,.35,-.01,-.26,.28,.35,-.25,.05,.13,-.08,.3,.34,.38,-.07,.17,.09,.22,.24,-.09,-.24,.09,.04,.06,.06,.43,.17,-.01,.13,.33,-.19,.18,.17,.27,-.04,-.08,.24,.2,-.01,-.13,.29,.06,.21,.3,.19,.09,.01,.19,.16,.43,.19,.27,.2,-.14,-.1,.38,.52,.18,.3,-.03,.28,.22,-.11,.15,.49,.1,.1,.26,-.29,.34,.06,.1,-.01,.18,-.18,.04,.37,-.03,.22,.23,.23,-.16,.09,.09,.62,-.19,.1,0,.5,0,.04,.32,.14,.13,.24,-.12,-.01,-.03,-.1,.32,.43,.28,.08,.03,.04,.17,.18,.15,.38,.21,.12,.12,.01,.04,.13,.34,.27,-.19,.09,.22,-.24,.19,.19,.3,.14,-.15,.23,.14,.34,.12,.14,.14,.09,.01,.17,.38,.16,-.07,.18,.27,.09,.34,.74,-.11,.18,-.14,-.06,.31,.2,-.07,-.13,.08,-.16,-.01,.05,.35,.01,.03,.04,.16,.22,.06,.21,.21,.1,.27,.05,.15,.14,.3,.02,.07,.21,.2,.33,.17,-.38,-.26,-.46,.03,-.01,.19,.24,-.07,.13,.15,.27,-.02,-.08,-.04,.14,.03,.09,-.06,.04,-.06,.29,.34,.28,.11,.42,.3,.22,-.31,.1,.22,.32,-.11,.32,.07,-.03,.19,.21,.03,.24,.12,-.04,.04,.21,.28,.2,.32,.09,.13,-.02,.02,.13,.05,.3,.01,-.13,.12,-.11,.07,.32,.05,.05,.17,-.05,.3,.29,.34,.19,.4,0,-.14,.13,.13,.36,.06,.03,.4,.1,.16,0,-.11,.09,.06,-.2,.1,.12,.04,.33,.28,.26,.27,-.05,-.16,-.07,.03,.01,.13,.27,.35,.12,.03,-.15,-.02,.12,-.12,.04,-.18,.15,-.5,.33,.12,.26,.07,.3,-.1,0,.29,.12,.27,.36,-.05,.1,.11,.12,.06,.15,.12,.13,.49,.12,0,.06,.01,.21,.13,.28,.26,.15,.13,.32,.42,.18,.12,.04,.45,.05,.13,-.04,.13,.24,-.04,.09,-.16,.16,.33,.19,-.08,.03,.21,.3,.13,.09,-.05,.23,.19,.17,.2,.16,-.03,.26,.26,.41,.26,.27,.02,.2,.3,.21,.26,-.02,.21,.31,0,.42,.24,.33,.17,.04,.34,.39,.04,.23,.27,-.2,-.04,.18,.28,.41,.19,.27,.03,-.04,.03,.33,.22,.03,.4,.2,.33,.04,-.04,.21,-.04,-.1,-.25,.22,.17,.09,.22,.12,.33,.16,.2,.4,-.1,.01,.15,.09,.32,.28,.13,.02,.07,.11,.24,.39,-.15,.22,.21,-.21,.24,.04,.18,.25,.15,.03,.15,.33,.25,.27,.43,.05,.29,.04,.25,-.1,.26,.04,.01,.21,-.06,-.06,.39,.1,0,.16,-.09,.21,.16,.04,.13,.22,.42,.24,.45,.29,.12,-.05,-.02,.05,-.03,-.05,.55,.09,.32,.28,.14,.27,.12,.08,.07,.5,.01,.01,.33,.3,.21,.27,-.07,.18,.14,.23,-.14,.05,.44,.07,.04,.32,-.06,.15,-.05,.1,.25,-.1,.32,.12,.07,0,.05,.26,-.03,.19,.14,.11,.12,-.11,-.08,-.15,.31,.22,-.05,.18,.31,-.11,-.12,.24,.36,.4,.16,.05,.4,.47,-.05,-.16,-.25,0,.02,-.02,.29,.16,.08,-.07,.07,.02,.05,.28,.07,.33,.23,.1,-.15,-.52,.01,.02,.19,.25,.19,.26,.13,.06,-.02,.04,.42,.07,.02,.16,.13,.21,.05,.16,.29,.22,.2,.04,.18,-.05,.26,.04,.01,-.07,.33,.06,-.04,.37,-.19,.07,-.03,.08,-.16,-.12,0,.08,.09,.11,.25,.22,.16,.2,.01,0,-.08,-.01,.39,.26,.4,.04,-.06,.09,.17,.14,.06,.36,.09,.24,.23,.2,.08,0,.35,-.22,.18,.35,.19,.26,.02,.11,.06,.29,-.07,.27,.07,.17,.3,.32,.05,.2,.3,.3,-.1,.17,.13,-.08,.14,.18,-.07,.38,.24,.18,.23,-.05,.3,.13,.35,.13,.16,-.04,-.07,.06,.19,.04,-.08,-.07,-.02,.04,.47,.03,.21,-.07,.1,.02,.13,-.08,-.12,.23,-.22,.17,.17,.3,1,.43,-.03,-.2,-.11,-.02,.26,.05,.08,.08,.41,-.11,-.03,.23,.2,.41,.18,.26,.02,.4,.33,-.13,-.02,.18,-.1,-.04,-.03,-.11,-.18,.27,.24,.29,.03,-.02,.11,.3,.3,.38,.16,-.03,-.06,.46,.22,.2,.05,.43,.25,.36,.46,.4,.34,.03,.2,-.13,.1,.2,.02,-.06,.31,-.19,-.1,-.1,.25,-.11,-.38,.37,.16,-.04,.22,.22,-.11,-.05,.28,-.21,-.03,.25,.01,-.02,.15,.08,.05,.1,.18,.29,-.03,.21,.39,.04,-.01,.07,.17,.34,.47,.48,.1,.12,.2,.44,.28,-.24,-.17,.04,.1,.24,.32,.01,.22,-.08,-.15,.31,.15,.3,-.2,.15,-.04,.03,.15,.11,.16,.3,.34,.3,.27,-.02,.26,-.13,.07,-.21,.06,-.08,.31,.22,.43,-.48,-.25,.36,.21,.1,.2,.32,.4,.23,.23,.24,-.28,.37,.39,.37,.14,.25,.03,.34,.04,.39,.19,.06,.4,-.07,.25,.4,.13,.09,.23,0,.3,-.13,.18,.33,.38,.3,.29,.04,.39,.05,.41,-.25,.27,.13,.25,.11,-.16,.31,.24,.25,.28,-.03,-.01,-.03,.15,.25,.28,.22,.32,.45,.2,-.07,.05,-.28,.11,.04,.22,-.11,.2,.34,.13,.09,.06];export{a as rvalData};
