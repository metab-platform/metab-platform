const a=[.79,.34,.05,.94,.41,.01,.01,.01,.13,.1,.03,.06,.96,.63,.01,.5,.06,.34,.1,.29,.49,.33,.99,0,.57,.31,.1,.15,.02,.01,.05,.75,.75,.37,.26,.56,.02,0,0,.93,.98,.59,.78,.7,.84,0,.43,.1,.49,0,.84,.79,.11,.21,0,.02,.32,.29,.08,.76,.05,.26,.58,.69,.01,.01,.39,0,.13,.99,.2,.05,0,.22,.57,.1,.25,.03,0,.14,.77,.55,.91,.08,.01,.42,.16,.88,.61,.1,0,.78,0,.12,.78,0,.48,0,0,0,.46,.64,0,.23,0,.23,.15,.46,.43,.01,.11,0,.08,.91,0,.56,.41,.06,.02,.64,.38,.52,.57,.01,.26,0,.71,0,0,.04,0,0,.35,.02,0,.01,0,.1,0,.05,.07,.07,.01,.2,.56,.92,.5,0,.02,.89,.83,.88,.96,.19,0,0,.02,.68,.01,0,0,.01,.19,0,.01,.02,.72,.01,0,.73,.69,.01,0,0,.02,.02,.58,.03,0,.63,.16,.11,.8,.01,0,0,.02,.07,.31,.39,.4,.01,.95,.01,.15,.23,0,.81,.22,.25,0,.13,.08,.22,.12,0,.42,0,0,.03,0,.02,.73,.06,.51,.33,.41,.02,0,.29,0,0,.01,.27,0,.07,0,.03,0,0,.37,.71,.95,.03,.54,.85,.01,0,.03,.66,.01,0,0,0,.04,.28,.97,.6,.9,.23,.02,.01,0,0,.27,.68,.44,.91,.3,.01,.24,0,.52,.13,0,0,.07,.04,.38,.93,.69,.41,.08,.04,.79,.28,.03,.01,.31,.54,0,.03,0,.07,0,.53,0,.03,0,.13,.01,0,.34,.62,.01,.95,0,.21,.08,.01,.92,.29,.64,.55,.22,.02,0,.02,0,0,.56,.09,.43,.22,0,.01,.07,0,.06,.19,.04,0,0,.22,0,0,.14,.02,.02,0,.62,0,0,.75,.48,.02,.01,0,.7,.63,.01,.84,.01,.88,.01,.29,.73,0,.87,0,.02,0,1,0,.32,0,.13,.02,.82,.01,.86,.15,0,.79,.39,.44,.39,.07,.02,.23,.77,.83,.78,0,.34,0,.09,.06,.23,0,.88,.17,.81,.41,.75,0,0,.66,.26,.23,.44,.29,.84,.39,.18,.19,.41,.12,.01,.25,.02,0,.2,.13,.06,.7,.02,.97,.05,0,.08,.83,0,.62,0,.35,.07,.92,0,.22,.54,.28,.32,.94,.93,.19,.36,.97,0,0,0,0,.62,.73,0,.01,.11,.16,.48,.26,0,.2,.04,.49,.61,0,.12,.07,.92,.04,.87,.02,.89,0,.46,0,.71,.11,0,.95,.16,.13,.98,0,.35,0,.61,.24,.32,.11,.13,.02,.17,0,0,.51,.13,.3,.2,.19,.04,.01,.52,.02,.21,0,.01,.01,.48,.05,.88,.08,.11,.04,.44,.41,.02,.37,.87,0,0,.03,.3,1,.73,.14,0,.25,.98,.08,.18,0,.32,0,.36,.84,.51,0,0,.24,.12,.46,0,.21,.01,.93,.42,.07,.36,.06,0,.01,.35,0,.42,.77,0,.17,0,.05,.62,0,.31,.32,.37,0,.14,.45,.77,0,0,.1,.12,.01,.81,.72,.87,0,0,.13,.03,.09,0,.01,.59,.58,.36,0,.03,.83,.52,.07,0,.26,.49,.06,.1,.18,.02,.92,.15,.79,.01,0,0,.02,.19,.18,.34,.01,.93,.59,.45,.64,.01,.82,.83,.07,.12,.45,.94,.29,.36,.08,.3,.04,0,.01,.08,0,.53,.01,0,.04,.51,.21,.26,.23,.09,.78,0,.02,0,.48,0,.87,.87,0,.03,.15,.68,0,.44,0,.03,.07,.49,0,.24,.89,.38,.34,.69,.37,.48,.02,0,.23,.07,0,.4,.52,0,.36,.68,.28,0,.03,.87,.65,.22,.69,.52,0,.54,.41,.7,0,.04,.82,.26,.74,.23,.01,0,0,.05,.42,.36,.32,.01,0,.69,.96,0,.44,.5,.18,.27,.01,.46,.05,0,.35,.35,.27,.02,.76,.9,.72,.13,.03,.02,.08,.03,.08,.65,.85,.78,.07,.75,0,.3,.15,.07,.53,0,.08,.26,.44,.03,.05,.01,.18,.93,.5,.75,.05,.19,.99,.66,0,.35,.24,0,0,.01,.31,.23,.71,.52,.62,.92,.25,.43,.79,.12,0,0,.06,.17,.03,.09,.01,.1,.93,0,.03,.15,.13,.37,.01,.61,.49,.37,0,.5,.17,.46,.12,0,0,.49,.63,0,.99,.01,.12,.88,0,.1,.01,.66,.13,.06,.01,0,.08,0,.14,.67,0,.01,0,.48,0,.24,.05,.01,0,.08,.33,.29,.83,.02,0,.81,.24,0,.67,.37,.92,.2,.26,0,0,.67,.44,.36,.67,.04,.34,0,.86,.95,.05,.59,.03,.99,.07,0,.09,0,0,.31,.24,0,0,.4,.25,.01,.88,.21,0,0,.41,.15,.28,.02,.11,.03,.04,.12,.41,.85,0,0,0,0,.04,.01,.2,0,.7,0,0,.89,.52,0,0,0,.65,.29,0,0,0,.08,.03,.83,.59,.05,.04,.94,.55,.01,.29,0,0,.25,.12,.28,.09,.68,0,.15,.6,.21,.43,.83,.28,.02,.64,.26,.03,.48,.67,.26,0,.08,0,.18,.31,.05,.28,.27,0,.54,0,0,.84,0,.96,.12,.89,.29,.25,.97,.05,.34,0,.02,.06,.43,.55,.13,.58,.01,.96,.48,.52,.01,0,0,.28,0,.08,.08,.31,.87,.14,0,.94,0,0,0,.41,.55,0,.32,.02,.38,.56,.13,.64,0,.89,.42,.19,.67,.44,.09,0,0,.52,.01,.01,.01,0,0,.2,.49,0,.28,.02,.16,0,0,.72,.48,.02,.02,0,0,.1,.5,0,.01,.21,.7,.17,.46,.44,.13,.88,.8,0,.11,.25,.58,.44,.39,.05,0,.1,0,.75,.81,0,0,.23,.33,.06,.49,0,.03,0,.88,.7,.11,.25,0,.66,.07,0,.11,.01,.16,.01,.71,.16,0,.08,.12,.63,.68,0,.62,.8,.48,.82,0,.47,.03,.01,.19,.2,.95,.03,0,.45,.09,.87,.13,.55,.17,0,.01,.56,.07,.77,0,.08,.01,.02,.02,.11,0,0,.41,.23,.31,.35,.21,.93,.02,.27,.85,.41,.43,.03,.71,0,.87,.37,.01,.03,0,0,.51,.25,.01,.29,0,.99,.44,.19,.13,.52,.22,0,.9,0,.02,.48,.82,.61,.01,.31,0,.99,.74,0,.04,.01,.79,.87,.47,0,0,.37,0,.3,.12,.83,.79,.69,.17,0,.82,0,.72,.26,.59,.17,.07,.45,.69,.02,.65,.1,.09,0,.07,.55,.92,0,.27,0,.69,.31,.86,.86,.97,.01,.17,.39,.61,.38,.71,.03,0,.02,.51,0,.01,.2,0,.68,.33,.7,0,.18,.84,.02,.68,.25,.2,.01,.43,.02,.01,.05,.01,.01,.78,.8,.09,.93,.11,.96,.22,.01,.19,.56,0,.01,0,.03,.49,0,.22,.11,.34,.02,.96,0,.44,.04,.49,0,0,.88,.3,.47,.54,0,.09,.05,0,0,0,.01,.96,.17,.22,.34,.79,.25,.33,.35,.02,.58,.09,.67,.38,.71,.03,.84,.08,.55,.19,.57,.31,0,.67,.77,0,.85,0,.16,.64,.48,.85,0,.38,.06,.02,.01,.02,.26,.12,.92,.08,.02,.45,.05,.36,.71,0,.36,0,.04,.74,0,.77,.31,.27,.31,.12,.51,.74,.29,.37,.01,0,0,0,.48,.55,.2,.43,.02,.67,.65,.93,0,.1,0,.07,.28,.03,.43,.03,0,0,.11,.15,.15,.08,.12,0,0,.47,.34,0,0,.01,.51,.77,.18,.55,.73,0,0,.01,.26,0,.75,.89,.16,.39,.4,.81,.68,.97,.23,.4,0,.01,.33,.01,0,.13,.03,0,0,0,0,0,0,.13,.1,.09,0,0,0,.24,0,.8,.05,.31,.07,.02,0,0,.06,0,0,.02,.04,.65,0,0,.93,.08,.02,.96,.6,0,.11,0,.01,0,0,.04,.18,0,.14,.19,.15,0,.37,0,.04,0,0,.02,.01,.03,.02,.24,.99,.44,0,.04,0,.07,.03,.14,.13,.31,.42,.27,.21,.01,.62,.23,.47,.11,.58,.14,.03,.68,0,.98,.2,.07,.75,.01,.13,0,0,0,.33,.23,0,.46,.23,.43,.57,.35,.01,.83,.74,.46,.13,.03,.03,.99,.53,.55,0,.32,.01,0,.13,.64,.68,.09,.04,0,.82,.01,.23,.25,.21,0,.02,0,.43,0,.79,.99,.03,0,.02,0,.97,.88,0,0,.89,0,.03,.16,0,.48,.2,.79,.72,.7,.83,.43,0,.03,.01,.13,0,0,.78,.61,.18,.02,0,.93,.72,.65,.24,.19,.32,0,0,0,.97,.01,.02,.23,.34,.49,.02,0,.05,0,0,.47,.3,0,.27,.01,.27,.28,0,.11,.08,.29,0,0,.14,.12,0,0,0,0,.54,.1,0,0,0,.08,.07,.59,.01,.49,.42,0,0,.05,.73,0,.34,.61,.09,.06,.02,.48,.2,0,.05,.01,0,0,.58,.75,.25,.19,.05,0,.01,.61,.1,.73,.01,.18,0,.85,0,.26,.1,.53,.24,.76,.03,0,0,.11,.03,.91,.02,.02,.06,.01,.2,.8,.72,.35,.18,0,0,0,.01,.08,.27,.79,0,.05,.01,.8,.05,.92,0,.02,.22,.02,.07,0,.55,.27,.81,.1,0,.1,.1,0,.38,.03,.01,.01,.04,.69,0,.9,.27,0,.02,0,.35,.17,.01,0,0,.31,.08,.21,.26,.47,.05,.03,0,.05,0,.03,0,.2,0,0,.91,.32,.94,.07,.04,.35,.52,.18,.5,.88,.41,.15,.04,0,0,.02,.89,0,.22,.5,.1,.37,0,0,.01,0,.06,.97,.02,.78,.1,.24,0,.01,.16,.02,.65,.66,.77,.2,.12,.05,0,.04,.04,.68,.02,.06,.17,.13,.08,.86,.82,.77,.43,.19,0,0,.07,.78,.93,0,.01,.07,.27,.89,0,.79,.81,.42,.06,.07,.83,.45,.8,.81,.76,.64,.3,0,.27,.84,0,.01,.22,.02,.58,.46,.21,.44,.23,.58,.94,0,.17,.98,.16,.06,.09,.02,0,0,.1,.99,.89,.21,.7,.57,0,0,.56,0,0,0,.45,.83,.81,.02,.06,0,.22,.27,.75,.59,.65,0,.01,.13,0,.9,.01,0,.99,.02,.09,.27,.07,.03,.03,.29,.62,.02,.23,.16,.57,0,.39,.01,.1,.04,.01,0,0,.44,0,.25,.65,.88,.97,.71,.27,.77,.02,0,.29,.03,.19,.91,.86,.17,0,.8,.07,.86,.01,.01,.73,0,.07,0,.11,.29,.01,0,.25,.23,.43,.15,0,0,0,.73,.18,.22,0,.14,.17,.06,0,0,0,.93,.78,0,.72,.14,.13,.76,.45,.07,.07,.43,.23,.36,.08,.02,0,.01,.8,.9,.85,.2,.15,.63,.13,.4,.48,0,.9,.46,.65,0,0,0,.03,0,.3,.54,0,.89,.64,.44,.09,.71,.45,.36,0,.72,.02,.18,.14,.37,.72,.01,.06,0,.91,.05,.46,.07,.15,.35,.6,0,1,.02,.48,.09,.03,0,.02,.33,.02,.19,.04,.61,0,.44,0,.08,.26,.5,.01,.13,.2,0,.35,.09,.62,.05,.01,0,.82,.01,0,.55,.03,.55,.23,.16,.9,.11,.01,0,0,.38,.1,.55,.04,.15,.95,.07,0,.06,.4,0,.1,.55,.41,0,.97,0,.02,.09,.2,.93,.23,.27,.09,.26,.61,.11,.13,0,.05,.06,.19,.54,.08,.81,0,.1,.05,0,0,.01,.18,.85,.69,.52,.56,0,.02,.01,0,.93,.33,.92,.1,0,.45,0,.02,.39,.87,.25,.18,.1,0,.28,0,.65,.7,.11,0,.01,.65,.16,.71,.13,.08,.11,0,.75,.62,.12,.01];export{a as pvalData};
