const a=[.7,.38,.25,.3,.18,.47,.03,.6,.01,.62,0,.64,.38,.3,0,.07,.02,.3,.31,.66,.14,.29,.89,0,0,.1,.85,0,.04,.93,.68,.69,.01,.48,0,.49,.01,0,.21,.2,.16,.32,0,.08,.56,0,.05,.12,.58,.24,.35,.27,.67,.04,.99,0,0,.64,0,0,.02,.2,.17,.82,0,.01,.12,.01,.26,.7,.89,.14,.42,.07,.91,.89,.28,.07,.23,.4,.39,0,.55,.49,.5,.32,.38,.71,.1,.07,.01,.25,.02,.01,.48,.25,.64,.56,.01,.12,.88,.17,.68,.52,.43,.05,.19,.65,.01,.77,.08,.19,.07,.08,.57,.15,.37,.13,.59,0,.71,.43,.01,.55,.13,.03,.69,0,.21,0,.38,.02,.91,.35,.08,.23,.53,.28,.74,.13,.43,.72,.71,.3,.8,.78,.56,0,.68,.9,.04,.29,.75,0,.86,.03,0,.97,.5,0,.14,.98,.55,.98,.08,.18,.01,.53,.52,.01,.48,.47,.03,0,.41,.68,.71,.76,.83,.01,.13,.31,.92,.13,.42,.46,.09,.23,.79,.27,.66,.27,.98,.02,.06,.03,.23,.45,.5,.16,.3,0,0,.69,.62,.13,.01,.62,.02,.48,.12,0,.43,.01,.65,0,.55,.74,.86,.69,.01,.78,.63,.07,.15,.01,.33,.87,.82,.81,.48,.84,.27,.36,.98,.49,.07,.02,.11,.12,.77,0,.77,.14,.22,.31,.52,.29,.08,.45,.29,.15,.99,.91,.76,.68,.16,.13,.85,.26,.86,0,.09,.58,0,.37,.91,.58,.66,.15,.29,.41,0,.09,.1,.34,.69,.2,.02,.41,.85,.69,.01,.03,.01,0,.38,0,.42,.19,.86,.89,0,.79,.32,.01,.01,.46,.28,0,.2,.06,.43,.41,.23,0,.09,.17,0,.01,.24,.86,.74,.75,.02,0,.09,0,.07,.47,.5,.59,.01,.1,.24,0,.14,0,.93,.01,.22,.17,.19,.45,.87,.19,0,0,.89,.22,.12,.02,.52,.99,.01,.12,.67,.11,0,.11,.29,.04,.49,0,.06,0,.68,.73,.04,.31,.09,.72,0,.75,.53,.19,.16,.01,.14,.97,.1,.3,.01,.77,.26,.9,.03,.85,.77,.01,.7,.22,.1,.27,.31,.4,.88,.74,.12,.15,.03,.19,.03,.99,.81,.08,.25,.12,0,.37,.11,0,.08,.07,.86,.66,.01,.04,.23,.01,.15,.26,0,.04,.41,.31,.65,.18,.78,.91,.71,.01,.98,.64,.11,.03,.01,.28,.01,.14,.95,.64,.01,.82,.02,.04,.04,.15,.02,.05,.9,.18,.8,.37,.03,.31,.06,.15,.2,.6,0,.17,.02,.01,.26,0,.59,.01,.08,.06,.28,.05,.1,.77,.12,.62,.06,.31,.03,.06,.24,0,.17,.6,.01,0,0,0,.05,.41,.08,.01,.94,.06,.08,0,.63,.23,.47,.48,.45,.95,.21,.01,.13,.01,.22,.35,.27,.29,0,0,.48,.03,.12,.97,.01,.02,.01,.29,.11,.01,.47,.3,.01,0,.59,.38,.98,.23,.99,.16,.4,.76,.66,.62,.45,.61,.26,.01,.86,.25,.73,.02,.63,.15,.01,.1,0,.87,.57,0,.24,.25,0,.76,.2,.21,.02,.04,.93,.01,.01,.04,.01,.32,.54,.23,.7,.35,.13,.65,0,.46,.6,.47,.5,.16,.69,.19,.26,.24,.04,.13,.42,.08,.7,.22,.7,.07,0,.9,.97,0,.07,0,.02,.56,.74,.01,.48,.54,.53,.36,.3,.04,.01,.23,.51,.03,.39,.33,.52,.49,.71,.97,.25,.34,.71,.01,.97,0,.17,.37,.33,.2,.1,.38,.27,.64,.93,.56,.32,.44,.01,.59,.28,.01,.85,.08,.15,.39,.33,.79,.45,.01,0,.56,.5,.42,.77,.03,.53,0,.19,.8,0,.16,.26,.1,.32,.05,.81,.02,0,.36,.03,.54,.12,.43,.09,.03,.02,0,.18,.95,.78,0,.16,.24,.02,.75,.22,.92,.83,.05,.07,.16,.1,.75,.37,0,0,.01,.17,.13,.95,.35,.01,.75,.62,.2,0,.64,.33,.15,.01,.29,.05,.46,.6,.58,.02,.07,.57,.3,.79,.29,.97,.95,.01,.8,.94,.01,.99,.55,.6,.91,.17,.65,.34,.61,0,.83,.12,.2,.33,.49,.89,.72,.23,.9,.22,.69,.49,.3,0,.13,0,.82,0,.06,.95,.26,.75,.22,.04,0,.37,.99,.77,.45,.9,.6,.05,.11,.1,.16,.36,.18,.04,.42,.01,.3,.1,.17,.24,.23,.05,.31,0,0,.09,.41,0,.65,.7,.12,.02,.01,.19,.51,.69,.58,.28,.75,.06,.06,0,.15,.1,.02,.72,0,.03,.55,.02,.92,.07,.4,.52,.22,.54,.09,.05,.31,0,.64,0,.26,.73,.03,.14,.02,.79,.34,.07,.39,.41,.01,.9,.14,.26,.02,.24,0,.81,.57,.62,.85,0,0,.37,.17,.96,.9,.91,.88,.42,.73,.02,0,.67,.68,.09,.29,.25,.2,.09,.81,.51,.44,.02,.38,.73,.37,.01,0,.08,.19,.02,.01,.39,.3,0,0,.44,.33,.86,.21,.8,.41,.34,0,.1,0,.23,.82,.87,.45,.38,0,.11,.23,0,.45,.61,.01,.82,.13,.35,.09,.49,.38,.72,.75,.47,.13,.19,.01,.1,.66,.74,.77,.86,0,.96,.32,.75,.62,.48,.29,.87,0,.86,.34,.71,.9,.15,.48,.13,.81,.42,.11,.86,.25,.65,.01,.99,0,.4,.04,.01,.17,.4,.02,.56,.04,.14,.13,.7,.01,.01,.05,0,0,.08,.01,.09,.69,.39,.06,0,.14,.97,.13,.04,.33,.62,.04,.02,.27,.16,.35,.87,.87,.35,.52,.06,.22,.31,.12,0,.2,.81,0,0,.15,.59,.08,.01,.04,.96,.89,0,.84,.06,.44,.36,.48,.01,.04,.74,.07,.42,0,.59,.64,.56,.71,.78,.62,.77,.48,.79,.11,.85,.12,.79,.35,.88,.06,.07,.79,.83,.26,0,.69,0,.32,.21,0,.57,.97,.5,.05,0,.12,.67,.93,.39,.47,.34,0,.24,.06,0,.35,.26,.15,.05,.01,.46,.31,.6,0,.99,.72,.82,.74,.19,0,.67,.09,.54,.68,.12,.25,.17,.02,.89,.75,.68,.11,.63,.36,.39,.02,.22,.14,.89,.29,.67,.06,.1,.02,.02,.44,.63,.03,.41,.4,.25,.3,.12,.54,.44,.03,.22,.29,.01,0,.04,.06,.4,.74,.25,0,.04,.09,.73,.23,.08,.06,.12,.04,.03,.07,.06,.16,.1,.78,.47,.4,.01,.7,.47,.01,.67,.04,.22,0,.67,.94,.31,.42,.74,.02,0,.18,.29,.12,.02,.26,0,.42,.01,0,.7,0,.5,.02,0,.25,.69,.56,.13,.02,.56,.2,.91,0,.7,.91,.4,0,.66,.75,.68,1,.01,.14,.1,.51,0,.23,.01,0,.63,.01,.38,.31,0,0,.09,.31,0,.13,.01,.79,.11,.06,.58,0,.17,.29,.02,0,0,.06,.06,.96,.39,.2,.01,.09,.98,.27,.69,.38,0,.01,.85,.02,0,.84,.3,.25,.84,.19,.06,.25,.72,.02,.05,.08,.39,.52,.69,.12,.3,.2,.09,.69,.46,.01,.53,.84,0,0,.04,0,.03,.01,.51,0,.05,.04,.63,.61,0,.06,.04,.32,.73,.69,.8,.31,.07,.96,.05,.93,.1,.01,.64,.41,.17,.08,.63,.7,.18,.07,.22,0,.66,.39,.65,.45,.53,.75,.08,.17,.21,0,0,.03,.92,.8,.74,.49,.32,.69,0,.43,.26,.47,.07,.17,.91,.86,0,.07,.24,.39,0,.02,.05,.51,.09,.71,.02,.03,.73,.81,.05,.01,.26,0,.01,.47,.96,.04,.03,.47,.01,0,.87,.02,.01,.42,.44,.01,.04,.8,.02,.03,.16,.27,.05,.68,.25,.01,.05,.09,.02,.18,.02,.25,.12,.01,0,.14,.36,.03,.1,.49,.11,.78,.93,.11,.47,.79,.23,0,.38,.99,.89,.86,.69,.3,.17,.41,.61,.57,.03,.78,.01,.13,0,0,.43,.18,.07,.02,.18,.49,.04,0,.33,.38,.52,.66,.37,.16,.31,.02,.74,.8,.26,.02,.72,.17,.02,.43,0,0,.6,.21,.06,.83,.42,.8,.12,.08,.12,0,.75,.23,.31,.84,.02,.2,.39,0,.99,0,.82,.96,0,.07,.78,.43,0,.27,.2,.45,.01,.56,.05,.01,.23,1,.12,.01,.02,.35,.77,.61,.09,.87,.01,.04,.02,.47,.47,.62,.53,.01,.97,.11,.6,.21,.81,0,.08,.01,.22,.97,.67,.26,.63,.05,.1,.6,.73,.03,.58,.46,.71,.21,.41,.36,.02,.34,.22,.05,.23,.21,.94,.82,.01,.19,.75,.93,.4,.04,.19,.4,.34,.73,.04,.35,.28,.57,.21,.21,.95,.52,.28,.35,.87,0,.15,.93,.01,.03,.02,.02,0,0,.02,.45,.23,.11,.81,.06,.06,.19,0,0,0,.01,.51,.43,.01,.51,.17,.82,.51,.72,.01,.16,.96,.02,.02,.69,0,.26,.25,.04,.07,.87,.17,.1,.01,.02,0,.54,.05,.47,.12,.03,.92,.08,.99,0,.69,.13,.19,.96,.56,.03,.04,.17,.38,.74,.79,.03,.01,.08,.09,.14,.15,.84,.59,0,.56,.75,.12,.01,.01,.29,.03,.56,0,.05,.01,.19,.16,0,.21,.74,.85,.32,.25,.37,.02,.27,.62,0,.79,.24,.01,.02,.03,.05,.83,.18,.73,.05,.48,.14,.47,.96,.01,0,.58,.3,.18,.34,.2,.17,.18,.57,.45,.41,.54,.04,.63,0,.44,.56,.12,.2,.35,.92,.48,.01,0,.49,0,.53,0,.28,.64,.65,.61,.78,.48,.61,.11,.1,.02,.06,0,.29,.14,.36,.04,.04,.59,.03,.14,.03,.14,.89,.03,.16,.04,.1,.04,.97,.83,.19,.93,.21,.44,.31,.16,.01,.81,.05,.33,.01,0,.24,.74,0,.18,.26,.5,.01,.24,.54,.78,.15,.25,.01,.09,.57,0,0,0,.19,.25,.77,.67,.05,.64,.21,.54,.98,.06,.06,.62,.03,.33,.88,.87,.01,.81,.54,.02,.39,.95,0,0,.75,.01,.79,.96,.58,.01,.04,.5,0,0,.49,.09,.04,.4,.9,.1,.35,.03,.4,.26,.14,.16,.16,.51,.17,.03,.18,.84,.87,.21,.07,.1,.47,.7,.02,.98,.92,.54,.98,.72,.79,.48,.09,.76,0,.05,.81,.18,.02,.63,.18,.86,.02,.03,.04,0,.09,.09,.46,.06,.58,.54,.31,.01,.22,.05,.02,.55,.94,.87,.1,.13,.32,0,.57,.28,.03,.16,.14,.63,.38,0,.02,.09,.49,.08,.01,.29,.43,.66,.35,.07,.01,0,.67,.04,0,0,.3,.21,0,.58,.18,.23,.07,.59,.55,.92,.81,.6,0,0,.01,.38,.15,.59,.02,.87,0,.77,.68,.53,.02,0,.53,0,.2,0,.05,.74,.74,0,.68,.67,0,.15,0,.32,.19,.11,.24,.39,.43,.21,.59,.01,.51,.12,.17,.14,.08,.92,0,.96,0,.33,.15,.41,.28,.25,0,.58,.6,.32,.26,.07,.47,.59,.53,.27,.25,.63,.02,.07,.67,.02,.01,.04,.1,.99,.06,.01,.71,.35,.16,.77,.07,.03,.87,.07,.04,.12,.56,.47,.66,.56,.09,.08,.42,.39,.17,.38,.04,0,.44,.85,.31,.02,.01,.81,.38,.01,.04,.01,.02,.59,0,.08,.28,.02,.75,.09,.42,.08,.73,.45,.04,0,.77,.16,.35,.04,.06,.03,.05,.2,.34,.03,.03,.8,.11,.03,0,.81,.17,.1,.14,.08,.9,.01,.01,.36,.52,.77,.88,.19,.64,.01,0,0,.11,.84,.16,.07,0,.41,.25,.01,.1,.79,.78,0,.12,.08,.77,.01,.6,.21,.36,.56,.27,.91,.14,.28,.34,.41,.02,.23,0,0,.01,0,.02,.35,.01,.08,.18,.01,.17,0,.44,0,.21,.02,.02,.56,.03,.06,.76,.92,.82,.21,.1,.24,.17,.73,.27,.18,.03,0,.03,.2,0,.44,.43,.47,.01,.73,.07,0,.03,.01,.84,.65,.25];export{a as pvalData};
