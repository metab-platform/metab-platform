const a=[-.28,.31,.18,.02,.35,-.07,-.15,0,-.08,.12,-.36,-.11,.02,-.34,-.11,.19,.05,.14,.04,-.12,.19,.06,.15,-.1,.05,.38,-.05,-.11,.25,-.04,.05,-.15,.12,-.02,-.38,.09,.17,-.02,.14,.17,-.12,.4,.04,.04,.11,-.08,-.1,-.33,-.02,.19,.1,.17,.26,.31,.12,-.21,-.11,.04,1,-.08,-.09,.28,.43,.02,.05,.1,.38,.02,.07,.02,.08,.15,.01,-.13,.41,-.17,-.05,-.1,.27,-.28,-.27,-.08,-.1,.39,-.18,-.18,.26,-.11,-.28,.17,.34,.11,.02,.03,-.25,.09,-.29,-.18,-.01,0,.1,.34,.23,-.05,.33,-.09,-.04,.07,.1,.27,-.08,.17,-.05,-.12,-.05,.39,-.19,.13,-.34,.05,.19,-.08,-.01,.04,.2,.24,.39,-.01,-.04,.25,.08,-.01,-.02,.08,.08,.25,.23,.25,.06,-.07,.46,-.02,.48,.29,-.07,.01,.02,.12,.25,-.02,.25,-.22,.1,-.14,.09,.32,.49,-.11,-.25,-.14,.21,.49,.02,0,.01,-.13,-.03,-.1,.09,.05,-.12,-.14,.17,.06,.23,-.11,-.09,.11,.04,.15,-.18,-.24,.02,.24,.22,.03,-.09,.08,.26,-.23,-.14,-.08,-.11,.13,.14,.21,.21,.2,.03,-.19,.08,-.11,.25,.11,-.27,.04,.21,.35,-.09,.07,.11,.04,-.12,.19,.03,-.18,.03,.11,-.12,.05,.41,.28,.18,.22,.35,.25,.09,0,.09,.22,-.02,.06,.27,.18,.22,-.08,0,-.08,.15,-.1,.2,.02,-.03,.07,.02,-.03,-.01,.1,.13,-.11,.09,-.02,.13,-.05,.42,-.16,.19,-.19,.14,.34,.09,.42,-.12,.46,.11,.27,-.32,.49,-.28,.15,0,-.24,.23,.24,.33,.09,.17,.01,.09,-.02,.14,0,-.04,-.13,.35,-.04,-.08,.12,.2,.03,-.18,.17,.16,-.09,.08,.06,-.28,-.22,.09,.3,-.23,.29,-.14,.04,-.23,.36,.28,.33,.36,-.29,.29,.09,-.05,-.07,.29,.3,.46,.38,.24,.14,.43,-.11,.09,.34,.35,.44,.28,.41,.07,.45,-.15,.41,-.11,.07,.05,.08,0,.31,-.08,-.13,.1,.04,-.04,.17,.25,.14,.11,.19,.03,.28,.33,.09,-.02,.37,-.01,-.04,.17,-.05,.13,.32,.06,.08,.39,.07,-.09,-.31,.35,.23,.03,.1,.21,-.14,-.02,.01,-.17,.11,.42,.44,-.12,.45,.05,-.09,-.14,.18,.1,-.02,-.1,.03,.13,.21,.16,.11,-.35,-.12,-.2,.29,-.14,0,.43,.21,-.09,.25,.18,.05,.17,0,.11,.18,.36,.49,.23,-.09,.05,.17,.05,-.01,.48,.2,.15,-.1,-.03,.22,.15,.02,.02,.3,.17,-.03,.29,0,-.03,-.01,.07,-.07,.29,.26,-.04,.34,.3,.09,.47,.29,.41,-.06,.2,.21,.2,.23,-.03,-.17,-.11,.35,-.25,.15,-.17,.13,-.06,.26,.15,.08,.37,.16,-.25,.01,.14,.07,-.07,-.19,-.25,.28,.04,.17,.04,.03,.41,.04,-.04,-.18,.22,.01,.25,.16,.46,.02,.17,.3,.29,.17,.03,.18,-.06,-.13,.15,.13,.27,.24,.44,.06,0,-.02,.4,.37,.2,.06,.35,.07,.14,0,.22,.05,.29,.26,.39,-.07,.18,-.12,.09,.12,.06,.39,-.15,.28,-.1,.01,.11,-.12,.24,.24,.07,.11,.12,.44,.05,.28,-.13,-.16,.33,-.03,.2,-.09,.16,.41,.1,.2,-.36,-.2,-.03,.21,.27,.42,-.01,.25,.18,.16,.24,.12,-.33,.11,-.27,-.07,.42,-.02,.55,.04,-.01,.09,-.01,.02,.13,-.05,.2,.24,-.13,.22,.43,.23,.02,-.17,.17,.07,-.36,.05,.44,.32,.19,.08,.22,.28,.12,.18,0,-.02,.13,.23,.03,-.23,-.03,.28,.26,-.16,-.02,.36,.33,.09,.37,-.02,.15,-.18,-.06,.44,.14,.13,.08,-.07,.16,0,.27,-.05,.03,-.08,-.01,.15,.06,-.13,.25,-.23,.17,.35,.43,.01,-.02,-.38,-.18,.06,.02,.16,.04,.09,-.05,-.15,.28,-.02,-.13,-.18,.15,.47,.25,.38,.11,.23,-.07,-.28,.23,.27,.04,-.16,.17,-.14,.13,-.03,.3,.06,.35,.38,.25,-.01,.17,.28,.25,.3,.13,-.09,0,.01,.19,.11,.21,.33,-.27,.01,.14,.2,-.12,.16,.09,.11,-.25,.42,.17,-.08,-.03,-.16,.39,-.05,-.05,.08,-.07,.1,.27,-.24,.41,-.05,.09,.24,-.02,-.05,-.01,.14,-.17,.01,.17,0,.2,-.21,-.17,.02,.15,.03,-.03,-.04,-.06,.37,.13,-.07,.06,.15,-.29,-.39,-.15,.45,-.26,.05,.21,.05,.16,.25,.19,-.13,-.11,.1,-.17,-.08,-.15,.15,.08,-.26,.13,.12,.2,.3,-.16,.06,-.16,.18,.36,-.25,.22,.45,.07,-.03,-.14,.08,.13,.31,.47,.28,.46,.14,-.02,.05,.21,.21,.33,-.03,.44,-.2,.2,-.14,.32,.4,.12,-.05,-.1,.53,.17,.43,.2,-.17,-.04,-.25,-.05,.19,.29,-.04,.28,-.08,.26,.43,-.14,.02,.02,.12,.12,.28,.12,.38,-.11,-.09,.48,.08,.07,0,.21,-.15,.36,.07,-.11,-.04,-.06,.27,-.03,-.07,.07,.17,-.06,.19,-.05,.1,-.19,-.15,.32,.26,.2,-.22,.02,-.21,.08,.04,.01,-.13,-.02,-.08,-.01,-.03,-.29,.34,.05,.02,.14,-.14,.12,-.04,.12,.04,-.02,.19,.39,.4,-.04,-.25,.13,.26,.12,-.14,.22,.39,-.17,-.05,.11,.09,-.08,-.13,.16,.44,.02,.38,.33,.02,-.16,-.08,.08,-.15,-.05,.36,.21,0,.02,.33,.4,.08,.37,-.09,-.06,.37,.52,.16,-.29,.16,.14,.21,-.25,-.01,.14,-.02,-.09,0,.06,.23,-.03,.16,-.08,.17,-.29,.1,.35,.1,0,.09,.08,.03,.01,.03,-.05,.21,.41,.32,-.11,.2,.51,.42,-.06,.22,.15,.3,.31,-.16,.07,-.01,.14,.43,0,.27,.26,.27,.21,-.15,-.13,.15,-.18,0,-.08,-.13,.24,.19,.26,.11,.36,.06,.42,-.33,.11,.1,.14,-.06,.36,.13,-.1,-.05,-.09,-.11,.26,0,-.17,-.3,.44,-.28,.47,.43,-.01,-.02,.33,.15,-.05,.04,-.18,-.03,.11,-.01,-.13,.39,.28,.06,.26,.08,.07,.3,.01,.18,.07,.06,-.05,0,.08,-.07,-.09,-.2,-.04,-.15,-.07,.02,-.1,.13,.02,.11,.03,-.06,-.06,-.29,.21,.04,.41,-.16,.06,.13,.22,.25,.1,.06,-.06,-.11,.25,-.1,-.01,.38,.04,.08,.19,-.2,.12,0,.15,.19,-.13,.05,-.16,.41,-.05,-.1,-.11,.18,.05,-.03,-.02,-.1,.18,-.14,-.07,.09,.01,.11,-.03,-.1,-.17,.19,.22,.05,-.13,.05,.12,.11,.09,.16,.18,.16,.08,.03,.18,.12,.32,.25,-.09,-.11,.04,.21,-.04,.23,.1,.03,.09,.25,.22,-.03,.32,-.1,.14,.49,.08,.27,.28,.22,-.05,.02,.09,.06,.2,.02,.1,.01,.1,.2,.09,.23,.06,.1,-.15,.01,-.17,.1,.16,.24,-.46,.05,-.17,.04,-.28,-.08,-.02,.14,.4,-.03,.14,.18,.28,.02,-.27,.38,.19,.28,-.02,.01,.36,-.31,-.07,-.15,.47,-.08,.18,.17,.02,.12,-.01,-.04,.13,.32,-.01,.35,-.07,.04,0,-.1,.01,.05,.18,-.02,-.01,-.01,.37,.13,.32,.13,.36,-.09,.01,.42,.25,.08,.2,-.04,.06,.1,.01,.02,.04,.42,-.13,-.07,.3,.17,.44,.16,.38,-.29,-.21,.16,.22,-.21,-.07,.26,.39,-.41,-.35,-.01,-.21,.23,.41,.42,.03,.26,.43,.11,.18,-.06,.01,.21,.1,.21,-.14,.42,.35,-.2,-.23,.25,-.18,-.06,-.11,.38,-.1,.04,.45,.42,.17,.34,.19,.17,.35,-.06,.31,.06,-.06,-.07,.15,.43,.09,.14,-.07,-.25,-.05,.26,.14,-.03,.28,-.1,.27,.33,-.14,.05,.48,.08,-.1,.23,-.3,.25,-.05,.24,.26,.4,-.03,0,.14,-.1,.26,.27,.31,-.41,.12,.04,.15,-.2,-.03,.1,.45,-.03,-.1,.17,-.05,-.1,.24,.04,.09,.02,.42,.23,.37,.29,.3,.18,.23,.26,.32,.38,.13,-.02,-.08,.09,-.03,.12,-.1,.25,.22,-.06,.42,.18,-.31,.24,.21,-.14,.11,-.14,.22,-.01,.13,.21,.1,-.18,.35,.18,.27,.35,.19,.01,.14,.16,.17,.39,.41,-.18,.03,-.07,-.03,.15,-.04,-.03,-.04,.1,-.14,-.02,-.09,.34,-.05,.06,.03,.18,.28,.13,.17,.13,.21,.29,-.05,.09,.1,.34,.03,-.02,.14,.02,.29,.4,-.22,-.33,-.4,-.14,-.07,.16,.42,-.13,.04,.16,.34,-.07,.02,-.05,.1,.03,-.01,-.12,.28,.05,.27,.32,.22,.1,.43,.37,.22,-.36,-.05,-.02,.27,-.12,.24,-.04,-.11,.19,.24,-.02,.12,.1,-.11,-.16,.16,.25,.06,.14,-.05,.1,.02,-.06,-.1,.03,.05,-.06,-.19,-.07,-.32,.11,.22,.06,-.11,.17,-.15,.17,.32,.49,.26,.27,-.04,-.18,.05,.08,.5,.18,.04,.44,-.14,.06,0,-.01,-.01,-.05,-.19,.01,.08,.05,.38,.22,.18,.2,-.04,-.08,-.06,.44,-.04,-.03,.18,.35,.04,-.05,-.05,0,.18,-.03,.01,.15,.31,-.3,.31,.1,.29,.07,.17,.08,.07,.35,.18,.2,.33,-.13,-.04,.25,.18,.15,.26,.47,.2,.49,.12,-.16,0,.07,-.03,-.25,.32,.11,-.03,.03,.27,.42,.39,-.15,.12,.21,-.08,.2,.21,-.1,.31,-.15,.14,-.2,.37,.4,.32,-.11,-.18,.21,.35,-.16,.08,-.12,.29,.14,.27,.33,.22,-.07,.47,.17,.39,.24,.23,.15,.27,.39,.15,.31,.36,.25,.19,-.09,.53,.16,.42,.32,-.06,.45,.41,.05,.26,.5,-.04,-.02,.25,.28,.4,.1,.34,.2,.02,-.03,.25,.26,.17,.41,-.06,-.03,.19,-.06,.25,.05,.05,-.15,.2,.31,.19,.06,0,.26,.17,.08,.37,-.16,-.12,.18,.1,.26,.28,.14,.17,-.03,.05,.37,.58,-.1,.27,.2,-.08,.25,.21,.03,.2,.09,.17,.1,.18,.01,.26,.5,.26,.35,.05,.32,.02,.21,.01,.47,.05,-.08,.21,.59,.25,-.01,.2,-.11,.3,-.02,.3,.18,-.02,.39,0,.43,.41,-.04,.09,.1,.1,-.03,-.21,.43,.3,.35,.17,.33,.41,.14,.26,-.06,.46,.37,.14,.26,.31,.18,.18,.05,.26,.13,.25,.21,.14,.38,.04,-.03,.43,.12,.36,.11,.17,.15,-.06,.33,.08,-.1,-.33,.18,.34,-.17,0,.05,.05,.22,-.28,-.2,-.02,.29,.24,-.01,.19,.32,-.22,-.16,.22,.34,.35,.01,-.03,.22,.35,-.13,-.18,-.19,.11,.17,.32,.21,.28,.28,-.1,.1,.28,-.09,.14,-.03,.55,-.07,-.12,-.15,-.29,.01,-.1,-.08,.36,.25,.29,-.07,.28,.15,.14,.27,-.11,.11,.08,.14,.22,-.15,.19,.14,.18,.13,.04,.35,-.07,.33,.14,.17,0,.27,-.1,.09,.1,-.14,-.04,-.17,.01,-.11,-.05,0,.26,.24,.14,.26,.2,-.12,.19,-.02,.1,-.2,.08,.27,.24,.34,-.1,-.17,.17,.06,.13,.33,.43,-.09,.18,.25,.19,.06,.18,.26,-.23,.36,.43,.24,.42,-.08,.04,.17,.25,-.33,.22,-.03,.03,.25,.28,.16,.2,.22,.35,-.11,.3,.07,.05,.04,.28,-.04,.22,.11,.06,.27,.1,.48,.12,.32,.2,.26,-.06,.02,.09,-.04,-.12,-.21,.02,-.21,-.08,.35,.12,.21,-.08,.23,.08,.15,-.01,-.11,.19,-.04,.27,.1,.47,.48,.5,-.07,-.06,-.2,.15,.06,-.03,.24,.27,.32,-.04,-.15,.37,.08,.36,.01,.24,.01,.35,.34,-.14,-.03,.19,-.35,.01,-.01,-.05,-.24,.3,.36,.2,.08,.06,.2,.28,.31,.47,.01,-.02,-.15,.4,.29,.19,.1,.43,.21,.46,.21,.37,.37,.05,.18,-.08,.15,.21,.13,-.12,.12,-.2,-.14,-.19,.22,.04,-.11,.43,.03,.08,.3,.25,-.01,.01,.36,-.2,.07,.43,.12,-.07,.18,.19,-.16,-.14,-.02,.41,-.18,.19,.31,.3,-.28,.17,.28,.3,.49,.3,.06,.06,.24,.45,.28,-.27,-.12,.05,.07,.3,.21,.05,.15,.12,-.06,.24,-.05,.16,-.03,.25,-.12,-.15,-.05,.16,.19,.31,.32,.21,.15,.14,.18,.02,.15,-.16,.11,-.04,.15,.16,.18,-.41,-.23,.28,.22,.05,.26,.47,.35,.16,.17,0,-.26,.34,.42,.3,.01,.32,.02,.38,.14,.08,.17,.27,.27,.14,.23,.41,.18,-.32,.22,-.18,.44,-.04,.17,.36,.37,.36,.35,.23,.4,.15,.22,-.12,.32,-.05,.22,0,.05,.43,.32,.33,.32,-.08,.04,.05,.11,.27,.18,-.04,.29,.46,.14,.02,.01,-.06,-.24,-.04,.11,.2,.18,.24,0,.18,.23];export{a as rvalData};
