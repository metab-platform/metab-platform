const a=[-.15,.11,.21,-.18,.23,.22,.17,.5,.25,.19,.01,.01,-.04,-.38,0,0,-.02,-.07,-.1,.03,.01,-.6,.27,-.2,.2,.36,-.64,.17,.05,-.65,.48,-.45,.32,.05,-.13,.15,.15,-.01,.3,.17,-.07,.3,.24,-.09,.17,-.09,-.12,-.13,-.55,.79,.3,-.11,-.06,.31,.69,.16,.18,.24,.2,.24,.71,.43,.55,-.02,-.28,-.79,.44,-.12,-.16,-.02,.03,.1,.75,-.38,.19,-.05,-.29,.67,.2,-.59,-.31,.17,.05,.28,-.13,-.54,.28,.03,-.31,.16,.53,.07,.66,-.15,-.06,.3,-.29,-.3,-.02,.67,-.08,.51,.61,-.05,.74,.1,-.31,-.23,.33,.58,-.01,.83,.22,-.28,-.05,.12,0,-.66,-.17,.31,.07,-.39,.21,-.02,.16,.7,.23,-.19,-.68,.19,.65,.16,.1,.83,-.12,-.2,.7,.35,-.62,-.21,.5,-.08,.49,.29,0,.11,.09,.01,.56,-.07,.49,.47,.11,.17,.59,.5,-.24,-.1,-.19,-.02,.53,.61,.07,.58,.63,.64,.29,-.7,.44,.29,-.03,-.6,.54,.21,.38,-.66,.15,-.62,.73,.29,-.21,0,.12,0,.64,.24,-.05,.08,.65,-.1,-.08,.68,.03,.64,.67,.34,.59,.25,-.16,-.39,.14,.56,.25,-.08,-.13,.57,.1,.8,.79,.09,.6,-.04,-.03,.14,.2,.51,.07,.57,-.65,-.37,.44,.62,.44,.3,.46,.23,.7,-.57,.51,.23,.05,-.01,.05,.22,.03,-.01,-.12,-.11,.24,.02,.8,-.13,.53,.59,.58,.46,-.01,.26,-.19,-.11,.57,-.32,.73,.3,.43,-.07,.11,.35,.27,.03,-.05,.37,.53,.48,.19,.7,-.37,.36,-.03,.18,-.27,-.15,.27,.36,.3,.01,-.62,.71,.49,-.55,.74,-.48,.07,-.24,.58,.49,-.4,.13,.51,-.36,.32,.72,.39,.48,.51,.24,.02,-.27,.27,.58,.21,.15,-.44,0,.14,.23,.16,.79,.47,.01,.31,0,-.09,-.05,.13,.59,.55,.56,.34,.52,.36,.04,-.08,.45,.56,.59,.32,-.17,.2,.59,-.29,.42,.19,-.08,-.62,-.1,-.8,.51,.18,-.13,.83,.18,-.04,-.09,.17,.34,.08,.64,.29,.55,.67,.45,.07,.57,-.24,.1,.42,-.2,.49,.08,.12,.14,.46,-.24,.04,-.25,.05,.22,.48,-.04,-.56,-.16,.17,.37,.48,.51,.01,.28,-.11,.6,-.1,.08,.02,.1,.03,.31,-.24,-.1,.46,.42,.51,.05,.02,.27,.2,.18,-.5,-.09,-.18,.17,-.2,.23,.4,.39,.6,-.06,-.11,.52,.56,.38,.33,-.29,.07,.52,.29,-.02,.48,.02,.74,-.11,.09,.23,-.43,.13,.02,.19,.2,-.03,.51,.34,.53,.33,.28,.15,.63,.15,.02,.42,.28,.56,.56,.3,.43,-.16,.66,.61,.16,.39,.06,-.58,.54,.75,-.43,.22,-.05,.09,-.56,.23,.31,.58,.3,.52,-.33,.64,.17,.2,-.16,.05,-.4,.32,-.21,.16,.14,-.18,.69,.41,.52,.55,.33,-.57,.6,.06,.28,.59,.62,.26,.61,.34,-.06,.17,-.03,.04,.09,.18,.3,.25,.56,-.06,.44,.59,.59,-.13,.45,.1,.4,.12,.02,.47,.2,.66,.53,.29,.36,.35,.65,-.53,.4,.68,.67,.23,-.29,.26,.17,.15,.33,-.11,.33,.08,.21,.46,.74,.55,.01,.56,-.02,.21,.55,.21,.12,.07,.08,.53,-.07,-.52,-.36,-.1,.17,-.52,.42,-.02,-.49,.23,.35,.2,.55,-.03,-.42,.36,-.36,-.05,.37,-.51,.31,.57,0,.07,.07,-.05,.51,-.01,.36,.23,.12,.22,.26,.17,-.09,-.3,.65,-.02,-.42,.04,.55,.29,.86,-.06,.2,.46,-.44,.11,.02,.11,.01,.45,.55,-.37,.47,.17,.38,.5,.36,.22,.2,.58,.16,-.68,.6,-.14,-.03,-.08,-.05,.05,.23,.67,.16,.01,.21,.47,-.27,-.03,.45,.24,.6,.09,.47,-.21,.27,.41,.5,.39,-.04,-.32,-.11,.7,.33,.68,.38,.66,.4,-.47,.35,.29,-.46,.11,-.01,.45,.19,.39,.15,.85,-.34,-.49,.56,.29,.4,.16,-.06,-.31,-.01,.12,.17,.25,.3,.48,.16,.15,.09,.33,.43,.25,.39,-.04,-.06,-.65,.59,.47,.66,.21,-.34,.08,.01,.05,.09,.3,.38,.28,-.27,.37,.43,.39,-.1,-.11,.26,.02,-.03,.12,.13,.21,.42,-.26,.3,.47,.56,.2,.18,-.16,-.13,-.08,.01,-.65,.51,.59,.38,.58,.11,-.16,.18,.29,-.11,-.07,.46,.44,.13,.06,.18,0,-.13,-.59,-.26,.3,-.43,.62,.4,-.14,.72,.71,.12,-.07,.06,.19,.03,.33,-.35,-.62,.05,-.18,.3,.11,.31,.65,-.16,-.16,-.21,.15,.24,.28,.03,-.41,.33,-.06,.03,-.64,.31,.35,-.31,.13,.46,.09,-.39,.09,.28,.47,.35,-.02,.69,-.3,.64,.49,.29,.57,.23,-.13,.07,.46,.23,.57,.62,.63,-.12,-.37,-.69,.32,.51,-.14,.32,-.66,.3,.44,-.16,.57,.12,.17,-.36,.49,.11,.44,.53,-.26,.43,-.05,.06,-.06,.42,-.58,.48,.57,-.24,-.65,-.17,.22,-.19,.02,.59,.3,-.04,.21,-.12,.38,-.28,-.16,.05,.24,.36,-.08,.08,-.23,-.18,.55,.1,-.62,.5,.25,.07,.63,-.42,.41,-.21,-.48,.79,-.13,.12,-.71,.43,.02,-.08,.34,.45,.45,.65,-.28,.6,.28,.06,-.17,.15,.33,-.42,.09,.33,.53,.1,.11,.03,.69,.37,.45,-.02,.52,-.05,.06,-.66,.43,.12,.45,.12,.22,.53,.2,.45,.42,.43,-.07,-.22,.72,.34,-.02,-.18,0,.24,.3,.4,-.12,.02,-.12,-.1,.37,-.13,.75,-.11,.69,-.08,-.61,-.49,.16,.43,.44,.15,.53,.54,.03,.39,-.19,0,.11,.44,.23,.06,.18,.3,.47,.69,.2,.08,.28,.3,-.31,.75,-.14,.44,.34,-.26,.25,.4,.33,.22,.2,.52,.34,.01,-.2,.52,.06,.22,.11,.6,.03,.41,-.02,.29,.3,.3,.19,.36,.12,.44,.1,.06,.47,-.26,-.11,-.39,.08,-.24,-.37,.27,.15,.32,.51,.79,.47,.36,.5,-.72,.56,.66,.55,.37,.02,-.03,.56,.79,.56,.74,.5,0,.65,-.16,.06,-.04,.11,-.01,.01,.07,.03,-.11,-.35,-.21,-.03,-.23,.01,-.23,.64,.66,-.43,.41,.01,.58,.11,.13,-.1,.34,.19,.08,.67,-.01,.29,.59,.05,-.01,-.24,.64,.02,.16,.52,.01,.79,.17,.56,.09,.02,.51,.2,-.51,-.13,.1,.68,-.04,-.06,-.24,.25,.67,.52,.24,.6,.11,.05,-.29,.14,.39,.3,-.45,-.15,.25,.08,.66,.4,-.74,.35,.2,-.07,.52,.37,.47,.2,-.05,.4,.18,.53,.36,.27,0,-.41,-.04,.09,.69,-.4,.07,-.05,-.57,.37,-.2,-.1,.36,-.39,.17,.56,.59,.25,.44,.35,.33,-.38,.43,.22,.21,.3,.22,.22,.44,.15,-.13,.74,.75,.03,-.5,-.36,-.07,.12,.43,.28,-.24,-.09,-.28,.01,-.23,0,-.07,-.08,.46,-.16,.42,.39,.25,-.06,.09,.2,.43,.35,.05,.1,.27,-.26,.08,.34,.45,-.02,.19,-.02,.22,.04,.09,-.24,.47,.29,.11,.57,-.06,.48,.13,-.05,.26,.57,-.15,.68,.33,.28,.35,.22,.47,.68,.62,-.08,-.37,.54,.74,-.09,.08,-.01,.25,0,.62,-.02,.07,.34,-.18,.07,.22,.11,-.27,.22,-.04,.34,.14,.16,.4,-.06,-.04,.46,.56,-.43,-.39,.47,-.02,.48,.48,.61,.3,.22,.11,.7,.33,-.32,-.06,.38,.17,.45,-.24,.32,.13,.4,.15,.34,.33,-.03,0,.49,.01,-.61,.38,.38,-.81,.25,.58,.03,.16,.47,.28,-.01,-.04,-.03,.11,.32,.3,.04,-.02,0,-.23,.06,.42,.04,.48,-.03,-.04,.46,-.06,.01,.61,-.29,.49,.49,-.37,.18,.06,.49,-.35,.49,-.67,-.64,.64,-.11,.28,.01,.57,-.35,.26,.47,.18,-.22,.48,.03,.58,.22,.31,.51,.05,-.13,.2,-.12,-.04,.05,.24,.26,.5,.67,.2,.63,.12,.45,.45,.71,.29,.38,-.02,.1,-.07,-.12,.61,.37,.24,-.23,.61,.18,-.21,.33,.1,.18,.46,.44,.15,-.06,.34,.27,-.14,-.05,.5,.39,.07,.42,.38,-.55,-.14,.45,.39,.43,-.09,-.14,.44,-.16,.11,.67,.58,.04,-.3,-.07,.43,.23,-.18,.76,-.19,-.07,.82,.65,.59,.49,.29,.57,.61,.8,.31,.74,.53,.51,.07,.32,.22,.45,.66,.77,.18,-.14,-.1,.4,.64,.2,.66,.14,.19,.25,.32,.23,-.16,.37,.46,-.09,.62,.48,.27,.04,.76,.58,.29,.61,.5,.83,.17,-.12,.63,-.12,.24,-.27,.72,-.03,-.33,.28,.41,-.11,.01,.75,-.57,-.04,.6,.39,.25,.31,.12,.08,.35,-.43,.28,-.18,-.09,.06,-.16,.46,-.07,.03,.32,-.07,-.14,.21,-.03,.39,.54,.56,.34,.3,.04,-.15,.7,.17,.58,.01,.44,.3,0,.6,-.08,-.36,-.01,.38,-.19,.21,0,.31,.33,.43,.36,.38,-.24,.1,-.14,.41,.1,-.55,.64,.55,.26,-.13,.18,.44,.72,-.28,.19,-.56,.55,-.01,.67,.59,.73,.05,.46,.47,.11,.47,.53,.42,.74,.25,.06,.67,.45,.43,.65,.61,.03,.34,0,.07,.11,.32,-.02,.38,.26,.56,-.37,.84,.23,.55,.37,.04,.36,-.01,-.34,1,.11,.02,.35,0,.53,.04,.47,.57,.68,.38,-.12,.16,.48,-.08,.06,-.74,.24,.43,.77,.39,.67,-.02,.52,.46,.71,.23,.51,.79,.45,.71,.56,.26,.3,.49,.4,-.17,.48,.09,.62,.56,-.15,.52,.49,-.1,.5,.49,.05,-.29,.44,.41,.37,.78,.47,.7,-.14,0,.45,.38,.3,.47,0,.48,.83,-.71,.84,-.06,.39,.1,.55,.26,.74,.69,.86,-.19,.38,.29,.46,-.4,-.49,.79,.19,.62,.02,.82,.21,.15,-.22,.28,.04,.66,.29,.31,-.07,-.36,.18,.6,.75,.28,.15,.09,.54,.54,.61,.63,.76,.65,.07,.53,-.11,.72,-.04,.61,-.04,.11,.09,.28,.15,.12,.41,.04,.93,-.02,.73,.58,.5,.57,.52,.36,.32,-.01,.46,.85,.38,-.04,-.09,.42,.77,.43,.02,.45,.3,-.19,.7,.69,.55,.62,.1,.21,.15,.6,.41,.54,.14,.87,.83,.82,-.03,.74,-.06,.38,.61,-.08,.53,-.02,.23,.7,.08,.42,-.3,.57,-.03,.75,.18,-.07,.63,.59,-.19,.6,.23,-.24,.14,.43,.34,-.06,.48,.5,-.2,.11,.45,.29,.18,-.19,.06,.07,.35,.01,-.44,-.12,.72,.65,.72,.23,.22,-.14,-.22,.15,.51,-.61,.45,-.42,.4,.48,.55,-.19,-.14,.01,-.13,.37,.54,.31,.46,.59,.49,.61,.9,.45,-.02,.29,-.08,.08,.56,-.23,.2,.25,.31,.28,.02,.6,.31,.54,-.66,-.08,-.03,.13,-.01,-.11,.45,-.53,-.22,.22,-.08,.09,-.03,-.09,.56,.59,.16,.21,.14,-.09,.29,.36,-.72,-.71,-.02,.44,.2,.34,.04,-.1,.42,.14,.5,.83,.36,-.08,.51,.26,.38,.74,.78,.4,-.05,.58,.33,.43,.44,-.65,-.21,.13,.27,.24,.76,.05,.5,.2,.55,.2,.14,.13,.48,.04,.48,-.02,-.31,.5,.56,-.05,.34,.38,.22,.62,.41,.54,.07,.62,.23,.21,.1,.08,.07,-.02,.05,.11,.19,.58,.44,.41,.05,.15,.17,.44,-.2,-.22,-.14,-.21,.23,-.04,.58,.31,.52,.13,.42,.33,.13,-.13,-.07,.49,.09,.59,.58,.67,.37,.37,.24,-.11,.32,-.22,.22,.66,.67,.8,.08,.16,.18,.3,-.05,-.06,-.18,-.12,.54,.57,.35,.4,-.14,-.49,.38,.77,.28,.03,-.04,.03,.34,.18,.26,.37,.41,-.01,.46,.03,.41,.34,-.7,.55,.65,.81,.5,.21,-.36,.18,-.15,-.05,-.17,.23,.11,.02,.23,.59,.05,.59,-.08,-.08,-.1,.51,-.46,-.02,.5,.02,.04,.05,.23,.33,-.19,-.12,.52,.16,.17,.29,.23,-.41,.18,.14,.23,.36,.35,.29,.16,.54,.3,.52,-.24,.04,-.17,-.07,.31,.32,.39,.1,-.03,.25,.09,-.28,.64,-.03,.21,-.63,-.09,-.33,.1,.34,.18,.24,.3,.79,-.1,.79,.19,-.39,.4,.03,-.09,.44,.17,.36,.01,-.35,.57,.12,-.1,.37,.54,.29,.43,.29,.52,-.38,.32,.44,.26,-.04,.54,.21,.46,.2,.56,.28,.22,.3,.43,.2,.3,.04,-.41,.2,-.28,.57,-.24,.22,.28,.23,.26,.28,.45,.53,.12,.52,-.37,.21,.02,.18,.22,-.02,.51,.34,.28,.49,-.43,.05,-.59,.62,.26,.34,.39,.41,.41,-.08,-.7,.1,-.34,-.24,-.03,.4,-.12,.1,.23,.05,.12,.72];export{a as rvalData};
