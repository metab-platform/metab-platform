const a=[.12,-.21,-.25,.13,-.19,.32,.11,.34,-.22,-.06,-.55,.11,.06,.11,-.65,.13,-.22,.11,.06,.1,-.07,-.18,.18,-.7,-.38,-.14,-.36,.15,.28,-.46,.16,-.23,-.21,.13,-.23,.04,-.46,-.69,.09,-.32,-.16,-.17,-.04,.14,.02,-.65,-.22,.06,-.23,.22,-.17,.15,-.23,-.3,.44,-.64,-.34,.28,.21,-.21,.27,-.11,-.06,.02,.03,-.2,-.08,-.73,-.01,.03,-.03,-.34,.47,.07,-.19,-.09,-.19,.32,-.32,-.11,.05,-.1,-.03,-.04,.13,-.16,-.13,-.04,.19,-.43,.6,.07,.18,.35,-.15,.4,.09,-.17,.41,.39,-.06,-.11,.3,-.03,.3,-.07,-.29,-.36,-.21,.17,-.14,.29,.07,.22,.18,-.26,.03,-.17,.13,-.28,-.04,-.11,-.1,.22,.14,.13,-.07,.47,-.2,-.43,.52,.31,.04,.26,-.26,.19,.53,.2,-.29,.08,.06,.05,.16,-.15,.08,.02,-.05,.72,.07,-.02,-.13,.03,-.01,-.12,.41,.67,.14,.02,-.14,-.74,.54,.25,-.08,.31,.16,.33,-.11,-.26,.54,-.22,.11,-.11,.57,.41,.11,-.21,.08,-.45,.45,-.22,-.24,.04,.16,-.47,.33,.29,-.24,.05,.43,.13,.2,.37,.01,.12,.08,-.26,.28,.03,-.1,-.02,-.51,-.09,-.4,-.08,.08,.3,.08,.52,.38,.14,.45,-.57,.01,-.48,.25,.2,.01,.36,-.31,-.39,.35,.33,.25,-.25,.27,-.4,.53,-.22,.32,.28,-.1,.19,-.38,-.27,-.22,.05,-.54,-.67,.29,-.06,.35,-.64,.43,.68,.22,.2,-.07,-.09,.05,-.02,.34,.07,.45,.38,.05,-.15,.08,-.18,.09,-.39,-.23,.64,-.04,.05,.77,.3,-.16,.01,-.28,-.29,-.07,-.03,-.36,-.32,-.18,.07,-.42,.34,-.23,-.21,.53,-.46,-.58,.21,.58,-.16,-.49,-.49,.38,-.02,.24,.41,-.13,.11,.32,.03,-.54,-.02,-.05,.35,.02,-.27,-.2,-.16,-.02,.09,.23,.19,.83,-.64,-.06,.03,.11,.09,.4,.36,.28,.59,-.25,-.05,.03,.13,-.62,-.07,.34,.6,-.09,.46,.07,.56,.06,.23,.21,-.07,-.15,-.17,-.19,.36,-.06,-.13,.25,.01,.09,0,-.49,-.23,-.02,.67,-.07,.42,.12,.51,.02,.6,-.16,-.57,.23,-.11,-.13,-.36,-.39,-.08,.65,-.3,.03,.17,.27,-.4,.45,-.04,-.15,-.1,-.32,.5,.33,.36,.02,-.01,-.11,.64,-.1,.08,-.04,-.11,.08,.14,-.1,.06,-.1,-.13,-.21,.03,-.13,-.08,-.15,-.27,-.2,-.01,.5,.08,.13,.59,-.2,-.19,.37,.02,-.55,-.1,.13,.32,-.27,.17,.58,-.2,.41,-.03,.08,-.2,.53,.13,.11,-.39,-.07,-.08,-.12,-.37,-.33,-.08,.51,.42,.4,.52,-.26,.07,.56,-.46,-.14,-.06,-.24,.09,.25,-.08,.09,-.3,-.09,.31,-.32,-.06,-.22,-.13,-.12,.26,.18,.46,-.11,.52,-.2,-.37,.56,-.12,-.2,-.03,.13,.42,.12,.21,.1,.02,.06,-.33,-.43,-.44,-.16,-.24,.71,-.24,-.27,-.23,-.24,-.39,.15,-.57,.07,.1,-.08,.49,.32,.54,.04,-.26,-.15,.11,-.03,.45,-.11,-.3,.33,-.22,-.1,.68,.59,.44,-.07,-.29,-.12,.22,.69,-.14,-.27,.42,.05,.47,-.05,.41,-.13,.08,.31,.3,.42,-.05,-.04,-.15,.36,.13,.4,.05,-.05,-.07,-.22,-.03,.47,.31,.04,.43,.14,.17,.51,.06,.85,.04,-.12,.59,.04,-.33,-.09,.2,.36,-.33,-.26,.33,-.47,-.39,-.32,-.38,-.15,.03,-.06,.45,-.13,.09,-.25,-.17,.35,.32,-.08,-.08,.06,-.14,.36,-.07,-.14,-.26,-.41,.16,0,-.33,.06,.07,.31,.04,-.14,-.03,.21,.55,.23,-.54,-.32,.16,-.04,-.48,-.1,-.05,-.06,-.07,.35,.22,-.18,-.32,.35,.02,-.08,-.28,-.15,.16,-.14,-.37,.59,.17,-.06,.34,-.01,-.51,.3,.37,.14,-.11,-.25,.21,-.17,.03,.38,.28,.37,.05,.67,.06,-.1,.61,.18,.22,-.02,-.39,-.13,.41,.14,.04,-.23,.45,.26,-.2,.31,-.11,-.11,.09,-.11,.08,.9,-.06,.06,.24,-.03,.11,.45,-.25,-.24,.03,-.67,-.18,.13,-.07,-.25,.03,-.26,.59,-.04,.12,-.13,.63,-.04,-.16,-.25,.08,-.11,-.44,.32,.63,.06,-.27,.2,.05,-.1,.81,-.19,-.22,.62,.11,-.04,-.12,-.16,.35,.01,.29,.84,.05,.16,.05,-.14,.05,-.2,.2,.02,.23,.08,-.25,.19,-.21,.06,-.05,.01,-.4,-.15,.41,.15,.03,.11,.02,-.04,.26,-.17,.04,.22,.1,-.49,-.05,-.16,-.08,-.05,-.22,.01,.01,.04,.26,-.13,-.12,.25,.59,-.51,.13,.09,.07,-.47,-.02,-.08,-.32,-.09,.08,-.18,-.54,.32,.32,-.01,.09,.08,.28,-.3,-.1,.18,-.24,.06,-.13,.04,-.24,-.22,.07,-.17,-.5,-.05,.16,-.28,.16,1,.86,-.12,.03,.71,.07,.24,.13,-.18,.55,-.24,-.01,-.05,.04,-.25,.26,.46,.31,.34,-.32,-.01,.62,.2,-.77,-.16,-.26,-.27,.08,.26,.4,-.08,-.05,-.05,-.03,-.36,.2,-.12,.11,.54,-.04,.13,.32,-.12,.15,.17,.54,.08,-.25,-.1,-.23,-.14,-.17,.37,-.27,-.12,-.38,-.13,.28,-.05,-.1,.59,-.4,.55,.22,.21,-.16,-.29,.25,-.03,-.22,.23,-.23,.11,.59,-.32,-.1,-.43,-.27,.2,-.25,.14,-.23,-.12,.04,-.06,.24,.59,.57,.24,0,.1,-.36,.17,.03,.83,.73,-.08,.14,.4,.39,.35,-.03,.06,.71,.79,.56,.21,.26,-.14,.1,-.34,-.34,-.01,-.1,-.52,.09,.69,.17,.09,.24,-.08,.32,.08,.4,.07,-.05,-.04,.05,-.08,-.31,.07,-.08,.13,-.16,.04,-.28,-.16,.61,-.01,.46,.11,-.33,-.1,.33,-.02,.43,.17,.47,.56,-.09,.79,-.05,.09,-.16,.07,-.21,.14,-.38,0,.58,.39,-.31,-.3,-.18,-.03,.22,.37,.11,.04,-.09,-.16,.41,.51,-.09,.5,.18,.12,-.25,-.09,-.28,.33,-.06,.6,.28,.43,-.26,-.07,.53,-.11,.23,-.21,-.17,.21,.05,.21,.01,.13,.19,.13,-.01,-.18,.68,-.72,.1,.04,-.41,.39,.6,.45,-.06,-.22,.49,-.15,.3,.1,.34,.52,.02,-.03,.32,.11,.44,.56,.3,-.17,.76,-.22,0,.02,-.03,.1,.1,.12,.08,-.03,-.49,-.09,-.07,.01,.12,-.3,.15,.39,-.37,.52,.15,-.08,.3,.86,0,-.08,.16,-.22,.42,-.2,.58,-.16,-.03,-.05,-.05,.52,-.08,.08,.57,.13,.18,-.42,.27,-.19,-.09,.36,-.35,-.4,.12,.02,.73,.08,0,-.01,-.06,.32,-.22,.13,.2,-.07,-.12,.07,.24,.79,-.22,-.46,.03,-.15,-.29,.3,.42,-.22,-.28,-.3,.03,.42,.26,.42,-.33,.28,-.01,-.5,.49,.23,-.31,.03,-.03,-.12,.07,.3,-.14,-.08,.09,-.17,-.04,.03,.56,-.18,.01,-.31,.19,.37,.57,-.11,-.06,.31,-.09,.51,-.35,-.19,-.15,-.24,.11,.01,.3,-.02,.5,.36,-.01,.04,-.14,.15,-.36,.43,-.19,.08,-.69,-.11,-.16,-.05,.04,-.01,-.55,.61,-.11,.56,-.06,-.33,-.03,-.03,-.16,-.14,.81,.13,.61,-.14,-.11,-.16,.14,.11,.09,-.25,-.4,-.21,-.16,-.04,.42,.34,.06,-.13,.72,.07,.49,.12,.01,-.24,-.06,.19,.42,-.2,.11,-.18,-.34,.02,.02,.33,-.09,.23,.59,.13,-.19,-.56,-.08,-.2,-.14,.66,.05,-.07,.47,.03,.02,-.33,-.53,.04,-.36,.29,.26,.4,.16,-.16,-.06,.12,-.04,.13,.25,-.11,.1,-.01,-.17,.58,.2,.66,-.23,-.2,.52,-.18,-.11,-.13,.32,-.32,.74,-.24,.01,-.16,.53,.4,-.09,-.07,.1,.07,.54,.1,-.45,.72,.59,-.28,.46,-.12,.13,-.18,-.25,-.19,-.05,.12,.08,-.5,-.12,-.31,.09,.08,.02,-.13,.01,-.03,.13,-.01,.04,.3,.57,-.06,-.22,.32,-.04,.38,.09,.1,-.22,-.22,.47,-.22,.31,-.36,-.24,.29,-.01,-.3,.07,.06,-.5,.22,.34,.04,.11,.27,.03,.32,.37,-.41,.34,-.11,-.02,-.27,-.14,-.15,.02,.3,-.14,-.05,.28,.63,.57,.25,.05,-.07,.18,-.22,.06,-.28,.01,-.09,-.68,.32,.81,-.4,-.2,.3,-.29,.33,.17,.46,.15,.28,-.16,-.42,.09,.19,.53,.04,.15,.55,.63,-.37,-.07,-.2,-.39,-.15,-.14,.53,.14,.32,.01,.59,-.11,.04,-.02,-.03,.06,-.21,-.37,-.1,.13,-.34,.33,-.06,.21,.36,.39,.06,-.11,.23,.32,.39,.44,.52,.4,.08,.07,.08,.27,.35,.31,-.01,.57,.11,-.16,.19,.07,.14,-.44,.36,.08,.34,.43,.08,.22,-.16,.31,.38,0,.26,-.23,-.26,-.04,.33,-.03,.37,.09,.56,.49,-.44,-.24,.63,-.27,-.23,-.07,.54,.02,-.43,-.31,-.02,-.74,.07,.34,-.21,.3,-.04,-.17,.11,.57,.25,-.58,.2,-.16,.08,.07,-.23,.09,-.02,.26,-.32,-.12,-.27,-.17,-.18,-.39,-.13,.26,-.11,.53,-.24,-.14,.2,.08,.32,.16,.43,-.58,.42,-.12,.02,.4,-.04,.22,-.03,-.03,.09,.16,-.11,-.28,-.3,-.22,-.06,.42,-.1,-.09,.01,.43,-.07,-.2,.36,-.02,.07,.19,-.2,0,.64,-.05,.29,-.2,0,-.02,.17,.07,.4,.03,.6,-.07,.08,.16,.47,-.09,.5,.01,-.06,.41,.53,-.07,.26,.2,.28,.23,-.04,.06,.07,-.13,-.07,.11,-.27,.61,.26,.19,-.41,.39,.42,-.35,-.31,-.3,-.32,.28,.13,-.12,-.19,.17,0,-.51,.55,.53,.28,-.07,-.41,.17,-.08,.02,-.06,-.24,.81,-.09,.34,.23,.02,-.15,.53,-.08,.43,-.22,-.11,.52,-.23,.12,-.06,.14,.55,.23,.02,-.24,.17,.19,.16,-.18,.03,.55,.13,-.43,.06,.03,-.03,-.03,-.18,-.15,.4,.4,-.06,-.1,-.7,.12,-.13,-.26,-.11,.07,.09,-.26,.38,-.15,.22,-.68,.42,.06,-.13,.06,0,.22,.23,-.43,-.2,-.35,-.14,-.03,-.16,.34,-.31,.46,-.33,.27,-.2,-.49,.05,.31,.33,.31,-.32,-.32,-.13,.26,-.29,.12,.26,-.26,.12,-.32,-.07,.12,.51,.25,.28,.07,-.12,-.03,-.08,.35,-.38,.31,.09,-.25,-.16,.24,-.33,.07,-.04,-.12,.28,.07,.23,-.11,-.16,.18,-.16,-.05,.85,-.31,.29,.28,-.01,-.04,.04,.07,-.06,-.03,.65,-.3,.85,0,.13,.41,.35,.51,-.17,-.26,-.21,-.05,-.11,.13,-.41,.31,.13,.2,.46,.3,-.31,.36,.17,-.12,.02,-.15,-.28,.06,-.02,-.08,0,.08,-.36,.11,.04,-.48,.37,.37,-.16,.03,.3,-.11,-.03,-.09,-.21,-.68,.62,.13,-.68,-.66,-.14,-.05,-.23,-.04,.15,.61,.02,-.06,-.03,-.06,-.01,-.07,.17,-.3,-.22,-.35,.04,-.44,.04,-.23,-.12,-.3,.11,-.32,-.13,.1,-.16,-.11,-.04,.33,.43,-.27,.12,-.17,.5,.18,.21,-.08,.07,.17,.09,.09,-.18,.01,-.33,-.2,-.16,-.18,-.07,.01,-.28,-.04,-.51,-.09,-.19,.03,.2,.02,.23,.04,-.11,.44,-.07,.04,.07,.01,.19,.03,.1,-.3,-.36,.11,-.3,.27,-.44,-.19,-.18,-.1,-.28,-.2,-.06,-.62,-.02,.2,.11,.34,.18,.17,-.14,-.17,-.1,.21,.35,.19,-.13,-.01,-.08,-.11,.63,-.29,-.42,.4,-.26,.14,.39,-.01,-.1,-.36,0,-.28,-.41,-.42,.06,-.07,.16,-.06,.02,-.24,.67,-.04,.44,-.12,-.49,.15,.32,.59,.13,.43,-.23,-.11,.15,.11,.09,.08,.09,-.53,.51,-.03,.19,-.05,.02,-.16,.16,.49,-.24,-.02,.01,.25,-.42,-.09,.71,-.12,.58,.19,-.02,.28,.58,-.07,-.17,-.18,.17,.54,.1,.42,-.11,.12,-.31,.45,-.08,-.03,-.39,.29,.48,.56,-.02,-.24,.24,0,-.06,.41,.01,0,.08,.06,.09,0,.07,-.22,.05,.52,.16,.02,-.12,.03,-.07,-.21,.05,-.13,-.08,-.03,.41,.19,-.13,-.28,-.37,.52,.28,.32,.22,-.09,-.08,-.29,-.28,.02,-.06,-.32,.01,-.23,-.1,.71,0,.06,.39,-.09,.14,-.11,-.15,-.45,.67,-.07,.25,-.09,-.4,.09,.03,-.05,.56,.36,-.45,-.23,-.17,-.22,-.37,-.43,-.25,.07,-.09,.12,.1,.23,-.13,.68,-.24,-.05,.01,-.09,-.36,-.06,.34,-.37,.01,-.18,-.36,-.43,.25,.12,.3,-.14,.11,-.38,-.03,.09,-.26,-.26,-.3,.16,-.19,.28,-.22,-.38,-.03,.03,-.21,-.29,-.43,.29,-.36,.11,.46,-.42,-.12,-.12,.45,-.22,.43,.13,-.15,.08,-.16,.09,-.28,-.09,.04,.19,.06,-.2,.31,0,-.21,-.14,-.11,-.39,-.19,-.61,-.16,-.4,-.45,.54,-.18,-.4,-.22,-.24,-.28,-.26,.45,.13,-.52,.29,.12,-.3,.12,-.32,.27,-.04,.19,.12,-.29,-.1,-.14,-.14,-.19,.47,-.22,.38,-.03,-.08,.05,.7,-.36,.04,-.16,-.12,-.03,-.19,-.16,.33,-.2,.16,.03,.23];export{a as rvalData};
