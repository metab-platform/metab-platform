const a=[.17,-.04,-.24,-.04,-.19,.15,-.02,.62,.14,.13,-.22,-.06,-.04,.04,-.36,.06,-.15,-.1,0,.14,-.07,-.66,.15,-.45,-.2,-.06,-.67,.28,-.06,-.67,.26,-.49,-.05,.03,-.42,.08,-.24,-.34,.15,.05,.03,-.07,-.01,.01,.07,-.23,-.22,-.11,-.49,.61,.09,.02,-.06,-.21,.59,-.11,-.04,.35,.09,-.19,.57,.08,.09,.06,-.22,-.65,-.01,-.44,0,-.05,.08,-.11,.62,-.23,-.2,-.15,-.15,.55,-.28,-.46,.02,-.2,-.07,-.03,-.1,-.62,-.05,-.09,.09,-.25,.59,.06,.5,.39,-.14,.26,.14,-.13,0,.52,.01,0,.3,.1,.4,.02,-.18,-.25,-.01,.19,.02,.7,.2,.24,-.1,-.31,-.39,-.55,-.1,-.06,.07,-.34,.05,.04,.32,.32,-.13,-.18,-.5,-.22,.73,.51,.02,.78,-.26,-.11,.91,.29,-.55,-.13,.13,-.05,.23,-.03,.08,.18,.05,.08,.17,-.07,-.03,.51,-.04,.14,.73,.53,-.01,.01,-.03,-.37,.69,.15,.03,.42,.41,.53,.04,-.54,.27,-.13,.07,-.51,.66,.66,.09,-.65,-.02,-.66,.63,-.17,-.23,.01,.11,-.35,.5,.14,-.06,.1,.51,-.01,.04,.57,-.12,.33,.31,-.19,.15,-.15,-.05,-.41,-.11,.32,-.19,.08,.18,.33,.29,.61,.69,.06,.74,-.38,0,-.25,.31,.3,.04,.64,-.66,-.24,.19,.37,.11,-.18,.2,-.2,.78,-.53,.39,.3,.16,.06,-.15,-.24,-.23,.06,-.38,-.23,.23,-.03,.78,-.5,.77,.92,.53,.61,-.12,.32,-.22,-.01,.46,-.22,.59,.13,.03,-.06,.01,.07,.26,-.4,.04,.52,.18,.1,.26,.38,-.28,.03,.05,-.01,-.25,.09,-.15,-.14,-.17,.01,-.64,.65,-.07,-.5,.84,-.33,-.27,.15,.56,.18,-.44,-.23,.28,-.47,.41,.67,.04,.54,.34,-.04,.07,-.11,.28,.41,.16,-.3,-.45,.03,.09,.08,-.06,.52,.4,-.1,0,.07,-.18,.03,-.1,.42,.35,.58,-.16,.29,.06,.07,-.43,-.02,.59,.56,.03,.06,.04,.53,.08,.21,.21,-.08,-.47,-.1,-.65,.38,.29,-.32,.64,-.15,.05,-.02,-.26,-.08,.02,.72,.04,.77,.22,.84,.12,.54,.21,-.26,.3,-.2,-.06,-.37,-.07,.03,.5,-.25,.13,.11,.15,-.19,.42,.03,-.71,.03,.09,.23,.42,.38,-.08,-.07,.01,.62,-.02,0,-.02,.06,.04,.09,-.16,-.06,.02,.02,-.03,-.08,-.02,.28,.23,-.28,-.46,-.04,.05,.24,-.19,.35,-.06,.15,.56,-.08,-.41,0,.1,.04,-.14,.08,.29,-.03,.35,.09,.05,-.42,.83,.01,.14,-.22,-.42,-.05,-.34,-.24,-.16,-.1,.48,.76,.73,.2,-.05,.05,.71,-.26,.2,0,-.18,.17,.2,.03,.24,-.06,.51,.36,-.25,.11,.08,-.2,.38,.46,.02,.29,-.02,.1,-.61,-.16,.36,.12,-.22,.15,.16,.6,.15,-.02,.12,-.02,-.05,-.22,-.23,-.25,-.02,-.09,.73,-.04,.17,.35,-.17,-.45,.24,-.32,-.18,.34,.55,.37,.22,.43,-.24,-.23,-.08,-.07,.04,.44,-.1,-.24,.44,-.04,-.09,.84,.69,.03,.02,-.18,.01,.25,.13,.02,-.15,.59,.12,.39,.15,.26,.58,-.51,.48,.75,.66,-.21,-.26,-.21,.13,.04,.11,0,.32,.04,.14,.27,.72,.45,.19,.89,.13,.22,.43,0,.2,-.06,-.1,.56,-.11,-.54,-.28,.11,.42,-.56,.03,.08,-.39,-.2,-.11,-.22,.22,-.03,-.26,.74,-.13,.18,-.13,-.61,.33,.58,.12,.1,.14,-.11,.54,-.09,-.08,-.26,-.05,.58,-.21,-.27,-.08,-.12,.63,-.19,-.31,.11,.15,.36,.43,-.46,-.24,.12,-.4,-.27,.04,-.05,-.01,.07,.59,.1,-.04,-.29,.28,.51,-.16,-.2,-.27,.52,-.23,-.7,.8,-.15,-.02,.01,-.02,-.29,.08,.57,.16,.06,-.25,.62,-.19,.16,.33,.36,.33,.09,.5,-.06,.33,.41,.07,.59,-.04,.02,.03,.62,-.02,.35,-.06,1,.53,-.55,.4,-.03,-.38,.21,-.36,.08,.36,0,-.17,.43,-.11,.02,.75,-.2,-.04,.11,-.49,-.14,.01,.04,-.28,-.06,-.14,.6,-.05,.12,.02,.4,.09,-.08,.15,-.06,.03,-.62,.34,.82,.23,-.25,.03,.06,.15,.13,-.06,-.04,.4,.29,.12,.02,-.01,.42,.02,.03,.27,-.03,.04,.12,.06,.13,.01,.06,0,.48,.32,-.15,.19,-.13,-.05,-.45,.12,-.71,-.03,.84,.35,.46,.06,-.09,.18,.16,-.01,-.04,.51,.05,-.24,.07,-.16,-.37,.03,-.62,.04,-.2,0,.53,.01,-.2,.59,.9,-.27,.01,.13,.18,-.3,-.02,-.43,-.63,.04,.09,.12,-.29,.39,.4,.06,-.31,-.2,.28,-.2,.07,-.12,-.64,.05,-.15,-.32,-.53,-.14,-.09,-.58,-.37,.06,.06,-.29,.04,.45,.52,-.1,.06,.7,-.1,.36,.62,-.13,.62,-.24,-.17,.08,.08,-.23,.16,.61,.61,-.15,-.54,-.6,.41,.1,-.4,-.09,-.55,-.2,.24,.23,.31,.2,.05,-.08,-.03,-.19,.11,.37,-.13,.57,-.03,.06,.2,.04,-.52,.17,.8,.13,-.52,-.13,-.21,-.07,0,.6,-.21,-.05,-.22,0,.34,-.11,-.09,.13,-.19,.43,.02,.07,-.3,-.21,.39,.04,-.52,.28,-.19,-.02,.88,-.4,-.15,-.24,-.49,.59,-.09,.09,-.68,.22,-.02,-.01,.21,.57,.55,.52,-.3,.29,-.17,-.13,.05,.21,.61,-.22,.09,.64,.83,.38,.06,.08,.71,.39,.59,-.06,.31,.05,.11,-.62,.11,.09,.04,-.29,.3,.48,-.02,.04,.59,.06,.11,-.02,.51,.04,-.01,.02,.07,0,-.16,.15,-.02,.05,-.07,-.02,.04,-.07,.87,-.13,.83,.03,-.62,-.54,.4,.12,.23,.15,.76,.85,-.02,.4,-.22,.34,-.2,.02,-.24,.14,-.24,-.19,.53,.59,-.13,-.3,-.13,-.01,.19,.61,-.07,.09,-.13,-.16,.06,.34,.07,.46,.28,.62,-.13,-.09,-.05,.7,-.06,.29,-.11,.75,-.13,-.06,.01,-.09,.07,-.05,-.16,.58,.08,.07,.12,.18,.3,-.01,.05,-.38,.19,-.61,.12,-.1,.02,.19,.35,.71,.11,-.15,.76,-.57,.62,.49,.7,.8,.07,.03,.27,.59,.76,.78,.65,.03,.66,-.14,.13,-.03,-.04,.12,.06,-.06,.17,-.01,-.46,0,-.06,-.09,.05,-.07,.34,.38,-.41,.23,.15,.4,.4,.26,-.18,-.04,.21,.12,.52,.06,.28,.18,-.01,.02,-.14,.83,-.11,-.01,.49,.06,.54,-.23,.48,-.03,.03,.72,-.26,-.55,.09,.13,.72,0,.15,-.18,-.03,.64,.22,-.02,.51,-.12,-.06,-.08,.29,.37,-.05,-.39,.02,.26,-.3,.57,.27,-.59,.15,-.18,.06,.6,.48,.31,-.24,-.18,.34,-.27,.78,.14,-.2,.05,-.5,-.01,.08,.63,-.46,.07,.16,-.65,.05,-.16,.36,-.06,-.49,-.26,.13,.59,.31,-.02,-.06,.43,-.33,.82,-.01,-.26,.14,-.02,-.04,.08,-.02,-.14,.62,.61,.04,-.45,-.32,.1,-.28,.46,-.15,-.28,-.46,-.11,-.03,-.11,.18,.02,-.51,.58,-.1,.67,.05,-.2,.09,-.08,-.24,-.01,.4,.07,.08,-.13,-.38,-.04,-.07,.07,.08,-.21,-.19,-.11,.33,.02,-.16,.53,-.16,-.02,.62,.04,.61,.17,.05,-.13,.08,.02,.61,-.03,.07,-.17,-.09,-.05,.63,.59,-.05,-.09,.51,.3,-.12,-.32,.07,-.03,-.02,.86,.1,-.08,.63,.08,.03,-.21,-.29,-.06,-.25,-.01,.38,.27,-.13,-.12,.03,.07,-.07,.13,-.32,-.29,.14,.05,-.04,.4,.2,.32,-.26,-.23,.76,-.18,-.21,-.09,.74,-.15,.32,-.15,.01,-.25,.49,.19,.03,.03,.08,.07,.57,-.09,-.5,.28,.52,-.64,.42,.12,-.01,-.29,.07,-.23,0,.08,.06,-.3,-.08,-.19,.22,.08,-.08,-.07,-.08,.26,.21,-.02,.14,.14,.58,-.1,.05,.32,-.17,.76,.03,.07,-.26,.08,.68,-.43,.17,-.67,-.55,.53,.02,-.25,.11,.09,-.57,.06,.67,-.08,.04,.75,.02,.28,.22,-.06,.48,-.09,.04,-.25,-.14,-.01,.15,.15,-.04,.11,.37,.53,.46,-.06,-.05,.05,.27,-.06,.14,.15,.1,-.15,-.49,.55,.49,-.18,-.34,.28,-.17,.23,.16,.2,.26,.43,.14,-.25,-.05,.33,.27,0,.42,.56,.29,-.38,.04,.02,-.38,-.06,.04,.61,.46,.01,-.11,.68,-.07,-.08,.36,.41,.06,-.31,-.27,0,.12,-.23,.44,-.01,.1,.61,.48,.14,.18,.15,.53,.69,.74,.38,.77,.14,.13,-.03,.38,.65,.61,.32,.7,-.11,-.35,-.04,.21,.43,-.35,.57,.2,.44,.59,.3,.44,-.28,.48,.53,-.07,.56,.07,.05,.02,.56,.1,.51,.16,.62,.58,-.22,-.52,.9,-.04,-.17,-.04,.88,0,-.31,-.11,.05,-.42,.01,.66,-.39,.22,.23,.05,.22,.27,.27,-.3,.24,-.31,.32,-.17,-.22,.15,-.19,.47,.16,.04,.03,.07,-.2,-.22,0,.34,0,.58,-.07,-.02,.17,.07,.68,.01,.56,-.38,.81,-.08,.02,.72,-.05,-.22,.06,.03,.16,.71,-.1,-.05,-.1,.13,.09,.42,-.35,.07,-.03,.34,-.12,-.57,.52,.07,.26,.13,-.14,.06,.65,-.03,.53,-.67,.07,.12,.26,.14,.53,.08,.39,.01,-.01,.24,.74,-.04,.54,.13,.15,.46,.7,-.09,.29,.48,.07,.33,-.01,.04,-.04,-.13,.19,.35,-.13,.57,.04,.47,-.18,.38,.4,-.19,-.04,-.21,-.24,.66,.09,-.13,-.06,.25,.28,-.27,.61,.62,.48,.18,-.17,-.02,.1,-.01,-.02,-.73,.28,.06,.54,.17,.12,.02,.61,.09,.46,-.22,.11,.74,-.06,.2,.2,.15,.36,.6,.14,-.37,.2,.1,.19,.13,-.12,.6,.12,-.29,.13,.3,-.06,-.17,-.02,.13,.25,.77,.13,.53,-.52,-.03,.07,-.11,-.03,.07,.09,.13,.66,-.67,.42,-.43,.74,-.03,.04,-.01,.28,.56,.64,-.28,-.05,-.11,.09,-.33,-.26,.69,.02,.87,-.41,.75,.1,-.2,-.13,.11,-.16,.29,-.24,-.1,-.04,-.3,-.28,.38,.55,-.1,.18,.14,.23,.23,.56,.24,.4,.19,.13,.05,.02,.52,-.13,.44,.05,.04,0,.26,-.37,-.07,.06,.06,.53,.08,.66,.02,.15,.25,.17,.06,.32,.04,.54,.72,.08,0,.11,.13,.34,.02,.11,.07,.33,-.15,.37,.6,.33,.66,-.01,-.24,-.25,.23,.1,.64,-.31,.55,.36,.55,.24,.49,-.26,.83,.2,-.1,.06,-.06,-.18,.28,.04,-.02,-.18,.5,-.13,.63,.27,-.26,.52,.59,-.15,.52,.15,-.13,.07,.07,-.13,-.38,.63,.11,-.57,-.2,-.02,-.07,-.23,-.16,.24,.3,.03,-.02,-.2,-.07,.61,.49,.51,-.23,-.27,-.47,-.04,-.27,.17,-.54,.24,-.52,-.06,.07,.35,.11,-.4,-.06,-.04,.28,.48,-.21,.34,.14,.7,.36,.72,.07,.1,.21,.14,-.01,.02,-.12,-.24,.01,-.07,-.05,-.08,.21,-.04,.06,-.55,-.16,.07,-.01,.39,.06,.58,-.21,-.24,.38,-.1,.05,.09,-.07,.19,.24,.18,-.27,-.29,.27,-.15,.5,-.59,-.37,-.04,-.09,-.24,-.13,-.32,-.03,.05,-.13,.25,.5,.35,-.14,-.01,-.14,.01,.5,.54,.33,-.21,.21,-.04,.03,.58,-.66,-.23,.16,-.07,.08,.57,.09,.15,-.24,.18,-.21,-.3,-.3,-.04,.06,.09,.11,-.11,0,.66,.12,.43,.01,-.2,.22,.2,.57,-.34,.52,-.25,.03,.14,0,.11,.06,.13,-.25,.66,.38,.44,.02,.12,-.11,.23,.75,-.25,-.21,-.11,-.07,-.17,-.11,.7,.01,.55,.15,.15,.47,.51,.06,-.13,.11,.08,.85,.18,.46,.01,.32,-.19,0,-.09,-.18,-.19,.48,.55,.65,.02,-.1,.11,.26,.07,.35,-.1,.04,.16,.06,-.07,.04,.06,-.53,.13,.6,.35,.11,.05,.16,-.09,-.28,.19,.02,.06,-.18,.53,-.06,-.08,-.09,-.64,.86,.26,.55,.2,.12,-.23,-.06,-.29,.07,-.16,-.18,.16,-.15,-.09,.55,-.01,.23,-.09,0,-.03,.01,-.21,-.39,.6,-.06,.2,-.11,-.25,.04,-.03,-.14,.59,-.05,-.23,-.17,-.26,-.44,-.24,-.25,-.2,.02,.04,.2,.25,.47,-.06,.55,-.52,.13,.04,-.07,-.15,-.03,.78,-.25,-.23,-.05,-.35,-.26,.57,-.01,.04,-.34,.1,-.27,0,-.06,-.29,.09,-.16,.64,-.11,.54,-.06,-.62,.12,-.02,-.46,.09,-.29,.65,.24,-.04,.35,-.19,-.2,-.15,.54,-.14,.42,.33,.18,.02,-.09,.03,-.19,.01,.08,.06,.05,-.11,.61,.14,-.27,-.02,-.12,-.2,-.08,-.34,-.35,-.21,-.52,.46,-.18,-.2,-.14,-.24,-.2,-.19,.68,.16,-.32,.56,-.04,-.27,.08,-.24,.56,-.01,.12,.11,-.19,-.02,-.46,-.09,-.72,.92,-.24,.63,0,.17,.03,.05,-.63,-.08,-.37,-.22,.05,.13,-.11,.29,-.19,.15,.02,.35];export{a as rvalData};
