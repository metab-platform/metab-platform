const a=[.16,-.18,-.05,-.17,-.21,.26,-.16,.39,.12,.08,.14,-.03,.04,.03,.13,-.05,-.04,-.13,-.16,-.09,.22,.17,.17,.06,.11,-.13,.02,-.04,-.16,-.05,-.1,.26,-.06,-.25,.14,0,-.07,.11,-.27,-.24,-.07,-.3,.01,.07,-.13,.1,-.16,.27,.03,.15,.28,.05,-.11,-.02,.12,.18,.25,-.02,-.13,-.27,-.01,-.23,-.05,-.13,-.13,-.05,-.13,.07,.09,-.04,.18,-.22,.13,.01,-.32,-.02,-.05,-.04,.11,.12,.19,-.36,-.01,-.32,0,.15,-.09,.16,.27,-.01,-.01,.09,.47,-.08,.1,.08,.17,-.01,.02,-.02,-.23,-.02,-.08,-.24,-.03,-.06,-.27,-.13,.08,-.09,.09,.06,.02,-.01,.31,-.25,.09,.01,.28,.08,-.1,.02,.2,-.02,.26,.02,-.21,.2,-.17,-.13,.54,.58,0,.22,-.04,-.11,.16,-.06,.09,-.02,-.19,-.05,-.25,-.09,.09,.28,.23,-.08,.08,.25,-.05,.52,.15,.17,.46,.1,-.25,.05,.16,.13,.28,-.02,.07,-.07,.47,-.08,-.22,.07,.37,-.15,.05,.04,.41,.13,.09,.23,.07,-.1,.05,-.16,.01,-.06,.04,-.27,-.06,.09,.06,.06,.23,.07,-.01,.45,.05,.11,.01,.12,-.1,.28,-.01,.13,.08,.09,-.12,.13,.17,.06,.21,.24,.2,-.13,.5,-.07,.15,-.09,-.02,-.16,-.1,.49,.13,.03,.16,-.07,-.11,-.03,.11,-.14,.49,.11,.15,-.13,-.08,-.12,-.17,-.05,.01,.03,-.12,.16,-.08,.15,-.05,-.08,.35,.04,.5,.55,0,0,-.06,-.1,.11,-.07,.08,-.01,-.14,-.04,.05,.12,-.07,-.23,-.08,-.16,.41,-.16,-.03,-.04,.02,-.14,.07,-.25,.09,-.08,-.05,.02,-.01,-.21,-.09,.01,.04,.04,.12,-.09,.21,-.07,.19,.28,-.05,-.05,.13,.2,.55,-.04,-.04,.51,.33,0,.23,.16,.28,.33,.19,-.17,.02,-.05,-.11,-.08,.44,-.1,-.05,.2,-.33,-.1,-.07,.1,.16,.32,.27,-.03,-.05,0,-.31,.06,.02,-.12,.26,.09,-.01,-.09,.39,.08,.16,.06,-.08,-.23,-.11,-.06,-.09,.14,.54,.46,.22,-.11,0,-.08,-.09,-.08,.02,.05,0,-.01,.03,.07,.04,.12,.02,.26,-.1,.08,-.09,-.23,-.12,.05,.1,-.05,.09,.02,-.02,-.1,-.18,-.3,0,-.09,.09,.34,-.08,.11,-.23,-.15,0,.07,.1,.03,.09,0,.16,.09,.13,-.07,.04,-.06,.07,-.13,-.08,.46,.44,-.14,.07,.02,-.1,.21,-.09,-.03,0,.12,.03,-.03,-.11,0,0,.01,-.01,.03,-.16,.06,.09,-.03,-.19,-.05,.11,.07,.23,-.03,-.03,-.03,-.02,-.17,-.08,-.19,.02,.13,.39,.35,.08,.23,.31,-.25,.51,.02,-.16,.09,-.09,-.32,-.3,.03,.05,.12,-.19,-.01,.06,.06,.39,.09,.1,-.08,-.07,.08,.12,-.15,.13,.15,-.12,.13,.14,-.09,.34,.35,-.22,.23,.11,.03,-.12,-.15,.03,.02,.09,.24,.31,.47,.06,-.05,.02,-.05,-.13,.44,-.08,-.01,.37,.33,-.11,-.07,.08,0,.42,.07,-.09,-.14,.19,-.03,.17,.15,.11,-.11,.01,-.13,-.32,-.01,-.15,.34,-.07,-.04,-.11,-.03,-.33,.01,.01,-.02,.2,.41,-.05,-.12,-.05,-.07,.29,.06,-.4,.04,.19,-.11,.11,.15,.4,.2,0,.22,.04,.11,.19,.29,.15,.04,.31,-.03,-.05,-.03,.08,-.08,.12,-.03,-.19,-.34,-.13,-.14,-.05,-.09,-.19,.03,.02,.04,-.11,-.06,-.03,.03,-.08,.51,-.16,0,-.12,.01,.15,.13,-.07,-.06,.27,.13,-.25,-.15,-.09,.35,-.05,-.13,.07,.13,-.09,-.03,.24,-.14,-.12,-.4,-.01,-.06,-.02,.13,.03,-.21,.51,.03,.34,-.19,.04,.5,.14,-.28,-.13,.24,-.03,-.08,.05,.21,.01,-.42,-.02,-.03,.14,.45,-.01,.18,-.14,.56,-.07,.02,.34,.12,.29,.05,.1,.09,-.11,-.11,-.1,.54,-.02,.26,.25,-.02,.37,.17,.21,.13,.42,.06,0,-.2,.13,.03,.13,-.16,.11,-.17,.13,.24,-.06,.05,.31,-.08,.22,.15,-.02,-.09,-.16,-.04,-.17,-.04,-.18,-.01,.01,.07,-.03,-.02,-.06,-.21,.08,.1,-.01,-.01,0,.07,-.09,-.27,-.03,-.03,.1,.01,-.4,-.02,.2,.02,.07,-.24,.07,.59,0,-.03,-.02,-.1,-.05,.47,.04,-.01,-.12,.26,-.31,.49,.28,-.24,.06,-.24,-.09,.02,.14,.05,.08,.08,.12,.61,.01,-.15,.22,.12,.11,-.15,.5,-.02,-.03,.19,-.23,-.11,.16,.11,.07,-.03,.15,.27,-.06,.15,.22,.18,-.1,.02,.01,.04,.09,.24,.36,-.1,-.11,.26,.05,-.03,.08,-.01,.12,.32,.01,-.08,-.08,.36,.3,-.21,.13,-.04,-.23,.06,.18,.3,-.21,.08,-.04,0,.09,-.07,.01,-.02,-.17,.07,.07,.07,.43,.5,-.2,-.08,-.08,.27,.12,-.2,-.01,.01,-.01,.01,.26,.06,.06,0,.08,.04,-.12,.07,-.06,-.31,-.18,-.08,.2,-.1,-.09,-.08,.05,.1,.43,-.02,-.11,.06,.09,-.11,-.07,.11,-.15,.12,-.02,-.14,-.37,-.17,-.14,-.01,.52,-.12,-.17,-.18,.1,.3,-.31,.09,-.05,-.13,-.03,-.04,-.07,-.06,.04,.35,-.02,.16,.05,-.22,-.09,.14,.18,-.07,-.14,.1,.23,.05,.1,.02,.08,.26,.11,.01,-.04,-.04,.54,.3,.08,-.17,.28,.17,.01,.09,-.16,.15,-.11,.4,0,.16,-.18,.08,.02,-.09,-.22,.4,.03,.03,-.02,.41,.05,-.28,-.13,-.03,.1,.21,-.07,.47,-.26,.07,.17,.12,-.17,-.13,.1,-.05,-.15,-.01,.43,-.06,.06,-.14,.06,.15,-.02,.22,-.04,.21,-.02,-.09,.04,.04,-.28,.13,.17,.12,.29,.11,.13,.06,.16,-.1,-.07,-.17,.14,-.2,-.11,-.12,.46,-.06,-.1,-.27,-.33,.07,.13,-.09,.01,-.24,-.06,.32,.1,-.28,.04,-.02,.48,.06,.19,-.26,.4,.11,-.03,.38,.3,-.36,-.21,-.2,-.28,.43,.1,.21,.35,.26,-.15,.03,-.1,.62,.23,.03,-.26,.09,.03,.1,-.17,.22,.46,.2,.12,.32,-.15,.42,-.03,.48,.66,.43,.06,.06,.1,.23,.01,.5,.27,.48,-.06,.07,-.12,.3,-.15,.04,-.07,-.16,0,-.2,-.09,-.13,0,-.26,-.12,.1,.09,.16,.29,-.1,.38,-.08,.4,.16,-.01,-.06,-.33,.06,-.23,.03,.1,.03,.04,.09,.06,-.23,.19,-.05,.19,.13,.03,.21,-.06,.38,-.09,0,.38,-.16,-.15,-.34,.1,.09,.02,.04,.11,-.02,.18,.36,-.12,.63,-.09,.4,-.03,.06,.03,.09,-.07,.11,.42,-.03,-.13,.03,.03,.2,-.07,-.19,.04,-.04,.07,-.14,.17,.26,0,.26,-.03,-.25,.01,.32,-.21,-.04,.08,-.22,-.18,.1,.17,-.06,-.05,-.25,-.14,.24,-.03,-.08,.51,-.03,.06,.01,.53,.03,.03,-.05,-.11,.13,.06,.16,.2,.25,-.12,.19,0,.05,-.02,-.04,-.02,-.05,.11,-.14,-.03,-.09,0,.01,.16,.04,.22,-.02,-.14,-.08,-.07,-.02,-.15,.07,.05,-.25,.08,.14,.1,.21,-.06,.1,.09,-.09,-.17,.07,.06,-.17,.01,.22,-.05,.18,-.06,.09,.03,.04,.07,.17,0,.07,.2,.22,.05,.02,.12,.01,-.12,-.13,.01,-.08,.16,.04,.07,.09,.12,-.16,-.1,-.14,-.33,-.14,.17,.13,.19,.18,-.12,.01,-.22,-.09,-.28,-.06,-.29,.64,.54,.21,-.04,.09,.1,.01,-.05,-.37,.07,.13,.22,-.01,.11,-.06,.12,-.03,-.32,.5,.01,-.37,-.1,.03,.03,-.05,.04,-.29,-.32,-.04,.09,-.3,.27,.07,.05,-.04,.03,-.15,-.17,-.15,-.16,.21,.1,.03,-.2,.37,-.02,.09,0,.07,-.1,-.22,.01,.1,.05,.15,-.03,.03,.05,.04,.01,.23,-.02,-.06,.02,.08,.08,0,.41,.08,.24,-.1,.04,.34,-.11,.21,-.09,.09,.32,.06,.01,.07,.08,-.13,.32,.57,.08,.14,.13,-.02,-.01,.21,.37,.28,.16,-.07,-.13,-.18,.07,0,.16,-.25,-.24,.07,.19,.19,.42,.01,-.05,.05,.09,.17,-.01,-.01,-.13,.04,-.05,.16,-.14,.11,.08,-.22,.15,-.11,.02,0,.05,.26,-.14,-.08,-.1,.06,-.1,.12,.11,.02,-.22,-.34,-.02,-.11,-.11,-.1,.24,-.15,-.42,-.34,.5,-.08,.04,.01,.43,-.02,-.13,-.04,.77,.09,-.11,.08,.08,-.12,.17,.44,.24,.22,0,.32,-.04,.17,.11,.39,.39,.06,0,.74,.38,.6,.09,.2,.21,.23,.44,.8,.59,.2,.12,.72,.61,.43,.11,.67,-.1,.7,.71,0,.71,.57,.14,-.12,.08,.08,.19,.43,0,.1,-.13,.16,.14,-.08,-.13,-.16,.18,-.04,-.22,-.11,.18,.07,-.09,.02,-.25,-.04,-.06,-.2,.11,.19,-.22,-.05,.03,-.16,.12,.03,.28,-.07,.05,0,.25,-.15,.08,-.07,0,0,.19,.16,-.01,-.11,-.36,-.07,-.05,.13,.19,.07,-.08,.14,.38,-.25,0,.5,-.13,-.15,-.15,.62,.12,.17,.05,.08,-.23,-.06,.01,.03,.13,-.06,-.04,-.16,.08,.12,.18,.08,-.17,-.29,.22,.45,-.03,-.12,.61,.16,.01,.27,.04,.43,.11,-.09,.38,.4,0,.13,.42,.23,.16,1,-.03,-.13,.45,.14,.27,.16,-.16,-.35,-.16,.05,.09,.29,.24,.29,-.23,0,-.21,.44,-.15,.24,-.12,.12,.16,-.16,-.35,.25,-.04,-.26,-.39,-.01,-.08,.12,-.16,-.06,.12,.11,.01,-.2,-.22,.07,-.14,-.06,-.14,.01,.34,.27,.09,.05,-.07,.14,.12,-.13,-.04,-.06,.02,-.03,-.09,.09,-.01,-.01,-.17,.04,-.11,.19,-.04,-.08,-.01,-.08,-.02,-.19,-.04,-.22,-.04,.12,-.11,-.33,.01,.35,-.12,-.01,0,0,-.06,.01,.13,-.02,.05,.34,.3,-.13,.15,.05,.06,-.01,.08,-.19,.05,.38,.36,-.52,-.1,-.01,-.22,.02,.1,.28,-.14,.12,-.11,.3,.06,.06,0,-.13,-.18,.25,.05,-.07,-.06,-.13,.1,.45,.23,-.09,0,-.06,.07,.44,-.14,-.02,.38,-.04,.17,-.01,-.03,.17,-.14,.18,.14,-.07,-.02,-.23,-.05,.18,.17,-.2,.27,.07,.19,-.05,.23,-.05,.21,-.2,-.07,.01,.37,.17,.32,-.18,-.13,-.14,-.02,-.18,-.18,-.06,-.07,0,.17,.45,.08,.13,.01,-.15,-.18,-.06,-.15,.01,-.11,.37,.14,.12,-.06,-.01,-.19,.33,-.01,0,-.02,.08,-.09,.14,.16,-.25,-.09,.46,.07,.03,-.18,-.15,.2,.52,-.15,.11,.19,-.1,-.1,-.21,-.04,.1,.24,-.14,.02,-.02,.13,-.12,-.18,.09,.04,-.11,-.16,.25,-.16,.01,.01,-.03,.15,-.12,-.03,-.12,-.01,-.16,-.07,-.14,.1,.15,-.21,.39,.46,-.03,.04,-.09,-.04,.35,.15,.06,-.31,.4,.27,-.02,.21,-.01,.07,.06,-.11,-.05,.07,.19,-.07,-.32,-.03,-.2,.05,.01,.18,0,-.06,-.16,-.13,.02,.46,-.25,.39,0,-.08,-.02,0,.09,.1,0,.01,.09,.01,-.15,-.12,-.06,.01,.65,-.05,-.08,-.15,-.04,-.15,-.2,-.44,.23,.26,-.16,.09,.12,-.32,-.39,.06,-.11,.11,-.11,.11,-.14,.52,.02,-.26,-.04,-.12,.06,-.12,.04,-.19,.42,.14,.14,.27,-.04,-.23,-.1,-.12,-.16,-.08,.13,.01,.1,-.01,.17,.16,-.26,.13,.1,0,.08,.03,-.1,-.12,.16,-.04,-.03,-.13,-.01,-.26,.04,.13,.21,-.03,.64,.81,.02,-.07,-.3,.81,.11,-.18,-.26,.14,-.12,-.08,.1,.11,.28,-.15,-.05,-.36,.71,.09,.43,-.1,.15,.09,.11,0,.15,.53,.81,-.26,-.1,-.11,.07,-.15,.63,.15,.2,.24,.35,.08,-.33,-.12,.08,-.09,-.19,.02,.1,-.15,.11,-.15,-.19,-.37,.24,-.33,.01,-.16,.32,-.15,-.13,-.07,.21,-.27,-.09,-.11,.29,-.05,-.28,-.03,.13,.24,.13,.29,.11,.12,.13,-.05,-.25,-.02,-.17,.27,.29,-.34,.12,.01,.03,-.28,-.04,-.17,-.02,.03,.01,-.06,.07,.05,-.01,.17,.21,.01,.31,-.11,.09,-.1,-.16,-.08,.11,-.11,-.11,-.21,-.14,-.03,.04,-.08,-.07,-.32,.15,.03,-.03,-.2,-.14,-.2,-.15,.38,-.06,.29,.42,-.11,-.23,.34,-.03,.34,-.21,.15,-.25,-.11,-.2,-.17,-.34,-.05,-.04,-.02,.21,.33,.07,.77,.07,.02,-.04,-.08,.08,.25,.23,.19,-.07,.13,-.04,0,-.15,-.08,.09,.2,.14,-.24,-.11,-.18,.08,-.08,.14,-.09,-.37,.47,-.37,-.03,-.07,.4,-.14,-.28,-.08,.03,-.16,-.14,-.19,-.18,-.11,-.3,-.15,-.24,-.24,.34,-.16,.12,.37,-.21,-.2,.06,-.11,.61,-.13,-.16,.08,-.26,-.06,-.02,.16,.02,.15,-.09,-.11,.04,.16,-.1,-.11,0,.1,.03,.01,.07,.1,.09,-.01,-.14,.06,.05,.06];export{a as rvalData};
